---
jupytext:
  formats: ipynb,md:myst
  text_representation:
    extension: .md
    format_name: myst
    format_version: '0.9'
    jupytext_version: 1.5.0
kernelspec:
  display_name: Python 3
  language: python
  name: python3
---



# Kolmogorov Backward Equation

## Overview 

As models become more complex, deriving analytical representations of the
transition semigroup $(P_t)$ becomes harder.

This is analogous to the idea that solutions to continuous time models often
lack analytical solutions.

For example, when studying deterministic paths in continuous time,
infinitesimal descriptions (ODEs and PDEs) are often more intuitive and easier
to write down than the associated solutions.

(This is one of the shining insights of mathematics, beginning with the work
of great scientists such as Isaac Newton.)

We will see in this lecture that the same is true for continuous time Markov
chains.

Throughout this lecture, the state space is assumed to be finite, with $|S|=n$.

This will help us focus on intuition rather than relatively minor technicalities.

Later we will investigate the case where $|S| = \infty$.

We will use the following imports

```{code-cell} ipython3
import numpy as np
import scipy as sp
import matplotlib.pyplot as plt
import quantecon as qe
from numba import njit

```



## State Dependent Jump Intensities

Recall that continuous time Markov chains jump between states and hence can 
have the form

$$
    X_t = \sum_{k \geq 0} Y_k \mathbb 1\{J_k \leq t < J_{k+1}\}
    \qquad (t \geq 0)
$$ 

where $(J_n)$ are jump times and $(Y_n)$ are the values at each jump.

(We are assuming that $J_k \to \infty$ with probability one, so that $X_t$ is well
defined for all $t \geq 0$ --- an issue we return to below.)

In the {doc}`previous lecture <markov_prop>`, the sequence $(Y_n)$ was drawn
from a Markov kernel $\Pi$ and called the embedded jump chain.

The holding times $W_k := J_k - J_{k-1}$ were IID and Exp$(\lambda)$ for some
constant jump intensity $\lambda$.

The difference in this lecture is that the jump intensity is allowed to vary
with the state.

This difference sounds minor but in fact it allows us to reach full generality
in our description of continuous time Markov chains, in a sense to be
clarified soon.

For now, as a motivating example, you can think of {ref}`the inventory model <inventory_dynam>`.

We assumed that the wait time for the next customer (when $X_t > 0$) was equal
to the wait time for new inventory to be delivered (when $X_t = 0$).

This assumption was made purely for convenience seems unlikely to hold true.

When we relax it, the jump intensities depend on the state.


### Algorithmic Construction

We start with two primitives

1. A Markov kernel $\Pi$ on $S$ satisfying $\Pi(x, x) = 0$ for all $x \in S$
   and
1. A function $\lambda$ mapping $S$ to $(0, \infty)$.

The process $(X_t)$ 

* starts at state $x$, 
* waits there for an exponential time $W$ with rate $\lambda(x)$ and then
* updates to a new state drawn $y$ from $\Pi(x, \cdot)$.

Now we take $y$ as the new state for the process and repeat.

More explicitly:

1. Draw $Y_0$ from $\psi$, set $J_0 = 0$ and $n=1$.
1. Draw $W_n$ independently from Exp$(\lambda(Y_{n-1}))$.
1. Set $J_n = J_{n-1} + W_n$.
1. Set $X_t = Y_{n-1}$ for $t$ in $[J_{n-1}, J_n)$.
1. Draw $Y_n$ from $\Pi(Y_{n-1}, \cdot)$.
1. Set $n = n+1$ and go to step 2.

The sequence $(W_n)$ is drawn as an IID sequence and $(W_n)$ and $(Y_n)$ are
drawn independently.

The idea behind the restriction $\Pi(x,x) = 0$ for all $x$ is that $X_t$
jumps to a new state at each jump time $J_n$.

This isn't strictly necessary but it makes the arguments clearer.


## Computing the Semigroup

For this jump process with time varying intensities, calculating the
transition semigroup is not a trivial exercise.

The approach we adopt is

1. use probabilistic reasoning to obtain an integral equation that the
   semigroup must satisfy.
1. Convert the integral equation into a differential equation that is easier
   to work with (the Kolmogorov backward equation).
1. Solve this differential equation to obtain the transition semigroup $(P_t)$.



### An Integral Equation

The integral equation referred to above is

$$
    P_t(x, y) = e^{-t \lambda(x)} I(x, y)
    + \lambda(x) 
      \int_0^t (\Pi P_{t-\tau})(x, y) e^{- \tau \lambda(x)} d \tau
$$ (kbinteg)

which, we claim, holds for all $t \geq 0$ and $x, y$ in $S$.

Here $(P_t)$ is the transition semigroup of the $(X_t)$
and $\Pi P_{t-\tau}$ is the product of two Markov kernels as previously
defined.

As we show below, this equation is an integral version of a famous equation
due to Kolmogorov.

For now, however, let's see why {eq}`kbinteg` holds.

Conditioning implicitly on $X_0 = x$, the semigroup $(P_t)$ must satisfy 

$$
    P_t(x, y) 
    = \mathbb P\{X_t = y\}
    = \mathbb P\{X_t = y, \; J_1 > t \}
        + \mathbb P\{X_t = y, \; J_1 \leq t \}
$$ (pt_split)


Regarding the first term on the right hand side of {eq}`pt_split`, we have 

$$
    \mathbb P\{X_t = y, \; J_1 > t \}
        = I(x, y) P\{J_1 > t \}
        = I(x, y) e^{- t \lambda(x)}
$$ (pt_first)

where $I(x, y) = \mathbb 1\{x = y\}$.

For the second term on the right hand side of {eq}`pt_split`, we have 

$$
    \mathbb P\{X_t = y, \; J_1 > t \}
    = \mathbb E 
        \left[
            \mathbb 1\{J_1 > t\} \mathbb P\{X_t = y \,|\, W_1, Y_1\}
        \right]
    = \mathbb E 
        \left[
            \mathbb 1\{J_1 > t\} P_{t - J_1} (Y_1, y) 
        \right]
$$

Evaluating the expectation and using the independence of $J_1$ and $Y_1$, this becomes

$$
\begin{aligned}
    \mathbb P\{X_t = y, \; J_1 > t \}
    & = \int_0^\infty
            \mathbb 1\{\tau > t\}
            \sum_z \Pi(x, z) P_{t - \tau} (z, y)  \lambda(x) e^{-\tau \lambda(x)} 
            d \tau
        \\
    & = \lambda(x)
            \int_0^t
            \sum_z \Pi(x, z) P_{t - \tau} (z, y)  e^{-\tau \lambda(x)} 
            d \tau
\end{aligned}
$$

Combining this result with {eq}`pt_split` and {eq}`pt_first` gives
{eq}`kbinteg`.



### Kolmogorov's Differential Equation

We have now confirmed that the semigroup $(P_t)$ associated with the process
$(X_t)$ should satisfy {eq}`kbinteg`.


Equation {eq}`kbinteg` is important but we can simplify it further without
losing information by taking the time derivative.

Doing so leads to the **Kolmogorov backward equation**, which is, for this
model

$$
    P'_t = Q P_t 
    \quad \text{where } \;
    Q(x, y) := \lambda(x) (\Pi(x, y) - I(x, y))
$$ (kolbackeq)

The derivative on the left hand side of {eq}`kolbackeq` is taken element by
element, with respect to $t$, so that

$$
    P'_t(x, y) = \left( \frac{d}{dt} p_t(x, y) \right)
    \qquad ((x, y) \in S \times S)
$$

The proof that differentiating {eq}`kbinteg` yields {eq}`kolbackeq` is an
important exercise (see below).



### Exponential Solution

The scalar valued differential equation $y'_t = a y_t$ with constant $a$ and
given $y_0$ has solution $y_t = e^{ta} y_0$.

This, along with $P_0 = I$, encourages us to guess that the solution to
Kolmogorov's backward equation {eq}`kolbackeq` is

$$
    P_t = e^{t Q} 
$$ (expsol)

where the right hand side is the [matrix exponential](https://en.wikipedia.org/wiki/Matrix_exponential), with definition 

$$
    e^{tQ} 
    = \sum_{k \geq 0} \frac{1}{k!} (tQ)^k
    = I + tQ + \frac{t^2}{2!} Q^2 + \cdots
$$ (expofun)

Working element by element, it is not difficult to confirm that 
the derivative of the exponential function $t \mapsto e^{tQ}$ is

$$
    \frac{d}{dt} e^{t Q} = Q e^{t Q} = e^{t Q} Q
$$ (expoderiv)

Hence, differentiating {eq}`expsol` gives $P'_t = Q e^{t Q} = Q P_t$, which
convinces us that the exponential solution satisfies {eq}`kolbackeq`. 

Notice that our solution

$$
    P_t = e^{t Q} 
    \quad \text{where } \;
    Q(x, y) := \lambda(x) (\Pi(x, y) - I(x, y))
$$ 

for the semigroup of the jump process $(X_t)$ associated with the jump kernel
$\Pi$ and the jump intensity function $\lambda \colon S \to (0, \infty)$ is
consistent with our earlier result.

In particular, we {ref}`showed <consjumptransemi>` that, for the model with
constant jump intensity $\lambda$ model, $P_t = e^{t \lambda (\Pi - I)}$.

Hence we simply replace the constant $\lambda$ with a function to obtain the
general case.




## Properties of the Solution

Let's investigate further the properties of the exponential solution.

### Checking the Transition Semigroup Properties

While we have confirmed that $(P_t)$ defined by $P_t = e^{t Q}$ solves the
Kolmogorov backward equation, we have not yet shown that this solution is in
fact a transition semigroup.

Let's now tie up this loose end.

First

$$
    \sum_y Q(x, y) 
    = \lambda(x) \sum_y (\Pi(x, y) - I(x, y))
    = 0
$$

Hence, if $1$ is a column vector of ones, then $Q 1$ is the
zero vector.

This implies that $Q^k 1 = 0$ for all $k$ and, as a result, for any $t \geq
0$,

$$
    P_t 1
    = e^{tQ} 1
    = I1 + tQ1 + \frac{t^2}{2!} Q^2 1 + \cdots
    = I1 = 1
$$

We have now shown that each $P_t$ has unit row sums, so all that remains to
check is positivity of all elements (which can easily fail for matrix
exponentials).

To this end, adopting an argument from {cite}`stroock2013introduction`, we
set $m := \max_x \lambda(x)$ and $\hat P := I + Q / m$.

It is not difficult to check that $\hat P$ is a Markov matrix and $Q = m( \hat
P - I)$.

Recalling that, for matrix exponentials, $e^{A+B} = e^A e^B$ whenever $AB =
BA$, we have

$$
    e^{tQ} 
    = e^{tm (\hat P - I)} 
    = e^{-tm I} e^{tm \hat P}
    = e^{-tm} 
        \left( 
            I + tm \hat P + \frac{(tm)^2}{2!} \hat P^2 + \cdots
        \right)
$$

It is clear from this representation that all entries of $e^{tQ}$ are
nonnegative.

We can now be reassured that our solution to the Kolmogorov backward equation
is indeed a transition semigroup.


### Uniqueness

Might there be another, entirely different transition semigroup that also
satisfies the Kolmogorov backward equation?

The answer is no --- linear ODEs with constant coefficients and fixed initial
conditions (in this case $P_0 = I$) have unique solutions.

In fact it's not hard to supply a proof --- see the exercises.




## Application: The Inventory Model

Use algo to simulate forward to time $t$.

Histogram.

Use exponential representation of semigroup to push densities forward.

Compare.





## Exercises

### Exercise 1

Prove that differentiating {eq}`kbinteg` at each $(x, y)$ yields {eq}`kolbackeq`.

### Exercise 2

We claimed above that the solution $P_t = e^{t Q}$ is the unique
transition semigroup satisfying the backward equation $P'_t = Q P_t$.

Try to supply a proof.

(This is not an easy exercise but worth thinking about in any case.)

### Solution to Exercise 2

Here is one proof of uniqueness.

Suppose that $(\hat P_t)$ is another transition semigroup satisfying 
$P'_t = Q P_t$.

Fix $t > 0$ and let $V_s$ be defined by $V_s = P_s \hat P_{t-s}$ for all $s
\geq 0$.

Note that $V_0 = \hat P_t$ and $V_t = P_t$.

Note also that $s \mapsto V_s$ is differentiable, with derivative

$$
    V'_s 
    = P'_s \hat P_{t-s} - P_s \hat P'_{t-s}
    = P_s Q \hat P_{t-s} - P_s Q \hat P_{t-s}
    = 0
$$

where, in the second last equality, we used {eq}`expoderiv`.


Hence $V_s$ is constant, so our previous observations $V_0 = \hat P_t$ and $V_t = P_t$
now yield $\hat P_t = P_t$.

Since $t$ was arbitrary, the proof is now done.



## Solutions

### Solution to Exercise 1

One can easily verify that, when $f$ is a differentiable function and $\alpha >
0$, we have

$$
    g(t) = e^{- t \alpha} f(t)
    \quad \implies \quad
    g'(t) = e^{- t \alpha} f'(t) - \alpha g(t)
$$ (gdiff)

Note also that, with the change of variable $s = t - \tau$, we can rewrite
{eq}`kbinteg` as

$$
    P_t(x, y) = 
    e^{-t \lambda(x)} 
    \left\{ 
        I(x, y)
        + \lambda(x) 
        \int_0^t (\Pi P_s)(x, y) e^{s \lambda(x)} d s
    \right\}
$$ (kbinteg2)

Applying {eq}`gdiff` yields

$$
    P'_t(x, y) 
    = e^{-t \lambda(x)} 
        \left\{ 
             \lambda(x) 
             (\Pi P_t)(x, y) e^{t \lambda(x)} 
        \right\}
        - \lambda(x) P_t(x, y)
$$

After minor rearrangements this becomes

$$
    P'_t(x, y) 
    = \lambda(x) [ (\Pi - I)  P_t](x, y) 
$$

which is identical to {eq}`kolbackeq`.




## References

```{bibliography} references.bib
```
