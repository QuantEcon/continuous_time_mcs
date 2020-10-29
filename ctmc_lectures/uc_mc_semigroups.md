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

(ucmc)=
# UC Markov Semigroups

## Overview

In our previous lecture we covered some of the general theory of operator
semigroups. 



Next we translate these results into the setting of Markov semigroups.

The Markov semigroups are defined on a countable set $S$.

The main aim is to give an exact one-to-one correspondence between 

* UC Markov semigroups 
* "conservative" intensity matrices and
* jump chains with state dependent jump intensities

Conservativeness is defined below and relates to "nonexplosiveness" of the
associated Markov chain.

We will also give a brief discussion of intensity matrices that do not have
this property, along with the processes they generate.


## Notation and Terminology

Let $S$ be an arbitrary countable set.

Let $\ell_1$ be the Banach space of **summable functions** on $S$; that is, all $g \, \colon S \to \RR$ with 

$$
    \| g \| := \sum_x |g(x)| < \infty
$$

Note that $\dD$, the set of all distributions on $S$, is contained in $\ell_1$.

Each Markov matrix $P$ on $S$ can and will be identifed with a linear operator
$f \mapsto fP$ on $\ell_1$ via 

$$
    (fP)(y) = \sum_x f(x) P(x, y)
    \qquad (f \in \ell_1, \; y \in S)
$$ (mmismo)

To be consistent with earlier notation, we are writing the argument of $P$ to
the left and applying $P$ to it as if premultiplying $P$ by a row vector.

In the exercises you are asked to verify that {eq}`mmismo` defines
a bounded linear operator on $\ell_1$ such that 

$$
    \|P\| = 1 \text{ and } \phi P \in \dD \text{ whenever } \phi \in \dD
$$ (propp)

Note that composition of $P$ with itself is equivalent to powers of the matrix
under matrix multiplication.

For an intensity matrix $Q$ on $S$ we can try to introduce the associated
operator analogously, via

$$
    (fQ)(y) = \sum_x f(x) Q(x, y)
    \qquad (f \in \ell_1, \; y \in S)
$$ (imislo)

However, the sum in {eq}`imislo` is not always well defined.[^fnim]

[^fnim]: Previously, we introduced the notion of an intensity matrix when $S$
  is finite and the definition is essentially unchanged in the current
  setting.  In particular, $Q \colon S \times S \to \RR$ is called an
  **intensity matrix** if $Q$ has zero row sums and $Q(x, y) \geq 0$ whenever
  $x \not= y$.

We say that an intensity matrix $Q$ is **conservative** if the sum in
{eq}`imislo` is well defined at all $y$ and, in addition, the mapping $f
\mapsto fQ$ in {eq}`imislo` is a bounded linear operator on $\ell_1$.

Below we show how this property can be checked in applications.    




## UC Markov Semigroups and their Generators

Let $Q$ be a conservative intensity matrix on $S$.

Since $Q$ is in $\linopell$, the operator exponential $e^{tQ}$ is well defined
as an element of $\linopell$ for all $t \geq 0$.

Moreover, by {prf:ref}`ecuc`, the family $(P_t)$ in $\lL(\ell_1)$ defined by
$P_t = e^{tQ}$ defines a UC Markov semigroup on $\ell_1$.

(Here, a Markov semigroup $(P_t)$ is both a collection of Markov matrices and a
collection of operators, as in {eq}`mmismo`.)

The next theorem says that this is the only way UC Markov semigroups can arise.

```{prf:theorem}
:label: usmg

If $(P_t)$ is a UC Markov semigroup on $\ell_1$, then there
exists a conservative intensity matrix $Q$ such that $P_t = e^{tQ}$ for all $t \geq 0$.

```

```{prf:proof}
Let $(P_t)$ be a UC Markov semigroup on $\ell_1$.

Since $(P_t)$ is a UC semigroup on $\ell_1$, it follows from
{prf:ref}`ucsgec` that there exists a $Q \in \lL(\ell_1)$ such that 
$P_t = e^{tQ}$ for all $t \geq 0$.

We only need to show that $Q$ is a conservative intensity matrix.

Because $(P_t)$ is a Markov semigroup, $P_t$ is a Markov matrix for all $t$,
and, since $P_t = e^{tQ}$ for all $t$, it follows that $Q$ is an intensity
matrix.

We proved this for the case $|S| < \infty$ in {prf:ref}`intvsmk` and
one can verify that the same arguments go through when $|S| = \infty$.

As $Q \in \lL(\ell_1)$, we know that $Q$ is a bounded operator, so $Q$ is a
conservative intensity matrix.  
```

From {prf:ref}`usmg` we can easily deduce that 

* $P_t$ is differentiable at every $t \geq 0$,
* $Q$ is the generator of $(P_t)$ and
* $P_t' = Q P_t = P_t Q$ for all $t \geq 0$.
* $P_0' = Q$

In fact these results are just a special case of the claims in {prf:ref}`ucsgec`.

The second last of these results is the Kolmogorov forward and backward equations.

The last of these results shows that we can obtain the intensity matrix $Q$ by differentiating $P_t$ at $t=0$.

```{prf:example}
Let us consider again the Poisson process $(N_t)$ with rate $\lambda > 0$ 
in light of the discussion above.

The corresponding semigroup $(P_t)$ is UC and hence there exists a
conservative intensity matrix $Q$ with $P_t = e^{tQ}$ for all $t \geq 0$.

This fact can be established by proving UC property and then appealing to
{prf:ref}`usmg`. 

Another alternative, easier in this case, is to supply the intensity matrix
$Q$ directly and then verify that $P_t = e^{tQ}$ holds.

The semigroup for a Poisson process with rate $\lambda$ was given in
{eq}`poissemi` and is repeated here: 

$$
    P_t(j, k) 
    = 
    \begin{cases}
    e^{-\lambda t} \frac{ (\lambda t)^{k-j} }{(k-j)!}  
        & \text{ if } j \leq k
        \\
    0 & \text{ otherwise}
    \end{cases}
$$ (poissemi2)

For the intensity matrix we take

$$
    Q := 
    \begin{pmatrix}
    -\lambda & \lambda & 0 & 0 & 0 & \cdots
    \\
    0 & -\lambda & \lambda & 0 & 0 & \cdots
    \\
    0 & 0 & -\lambda & \lambda & 0 & \cdots
    \\
    0 & 0 & 0 & -\lambda & \lambda & \cdots
    \\
    \vdots & \vdots  & \vdots  & \vdots  & \vdots 
    \end{pmatrix}
$$ (poissonq)

The form of $Q$ is intuitive: probability flows out of state $i$ and into
state $i+1$ at the rate $\lambda$.

It is immediate that $Q$ is an intensity matrix, as claimed.

The exercises ask you to confirm that $Q$ is in $\lL(\ell_1)$.

To prove that $P_t = e^{tQ}$ for any $t \geq 0$, we first decompose $Q$ as $Q
= \lambda (K - I)$, where $K$ is defined by 

$$
    K(i, j) = \mathbb 1\{j = i + 1\}
$$

For given $t \geq 0$, we then have

$$
    e^{tQ}
    = e^{\lambda t (K-I)}
    = e^{-\lambda t} e^{\lambda t K}
    = e^{-\lambda t} 
    \sum_{m \geq 0} \frac{(\lambda t K)^m}{m!}
$$


The exercises ask you to verify that, for the powers of $K$, we have $K^m(i,
j) = \mathbb 1\{j = i + m\}$.

Inserting this expression for $K^m$ leads to 

$$
    e^{tQ}(i, j)
    = e^{-\lambda t} 
    \sum_{m \geq 0} \frac{(\lambda t )^m}{m!} \mathbb 1\{j = i + m\}
    = e^{-\lambda t} 
    \sum_{m \geq 0} \frac{(\lambda t )^m}{m!} \mathbb 1\{m = j-i\}
$$

This is identical to {eq}`poissemi2`.

It now follows that $t \mapsto P_t \in \lL(\ell_1)$ is differentiable at every
$t \geq 0$ and $Q$ is the generator of $(P_t)$, with $P_0' = Q$.

```



### A Necessary and Sufficient Condition

Our definition of a conservative intensity matrix works for the theory above
but can be hard to check in appliations and lacks probabilistic intuition. 

Fortunately, we have the following simple characterization.


```{prf:lemma} 
:label: scintcon

An intensity matrix $Q$ on $S$ is conservative if and only if $\sup_x |Q(x,
x)|$ is finite.

```

The proof is a solved exercise.



```{prf:example}
:label: jccs

Recall the jump chain setting where, repeating {eq}`kolbackeq`, we defined $Q$
via

$$
    Q(x, y) := \lambda(x) (K(x, y) - I(x, y))
$$ (kolbackeq_inf)

The function $\lambda \colon S \to \RR_+$ gives the jump rate at each state,
while $K$ is the Markov matrix for the embedded discrete time jump chain.

Previously we discussed this in the case where $S$ is finite but there is no
need to restrict attention to that case.

For general countable $S$, the matrix $Q$ defined in {eq}`kolbackeq_inf` is
still an intensity matrix.

If we continue to assume that $K(x,x) = 0$ for all $x$, then $Q(x,x) = -
\lambda(x)$.

Hence, $Q$ is conservative if and only if $\sup_x \lambda(x)$ is finite.

In other words, $Q$ is conservative if the set of jump rates is bounded.
```

This example shows that requiring $Q$ to be conservative is a relatively mild
restriction.



### The Finite State Case

It is immediate from {prf:ref}`scintcon` that every intensity matrix is
conservative when the state space $S$ is finite.

Hence, in this setting, every intensity matrix $Q$ on $S$ defines a UC Markov
semigroup $(P_t)$ via $P_t = e^{tQ}$.

Conversely, if $S$ is finite, then any Markov semigroup $(P_t)$ is a UC Markov
semigroup.

To see this, recall that, as a Markov semigroup, $(P_t)$ satisfies 
$\lim_{t \to 0} P_t(x, y) = I(x,y)$ for all $x,y$ in $S$. 

In any finite dimensional space, pointwise convergence implies norm
convergence, so $P_t \to I$ in operator norm as $t \to 0$ from above.

As we saw previously, this is enough to ensure that $t \mapsto P_t$ is norm
continuous everywhere on $\RR_+$.

Hence $(P_t)$ is a UC Markov semigroup, as claimed.

Combining these results with {prf:ref}`usmg`, we conclude that, when $S$ is
finite, there is a one-to-one correspondence between Markov semigroups and
intensity matrices.



## From Intensity Matrix to Jump Chain

We now understand that there is a one-to-one pairing between conservative
intensity matrices and UC Markov semigroups.

These ideas are important from an analytical perspective.

Now we provide another point of view, more connected to probability.

This point of view is important for both theory and computation.



### Jump Chain Pairs

Let us agree to call $(\lambda, K)$ a **jump chain pair** if $\lambda$ is a
map from $S$ to $\RR_+$ and $K$ is a Markov matrix on $S$.

It is easy to verify that the matrix $Q$ on $S$ defined by 

$$
    Q(x, y) := \lambda(x) (K(x, y) - I(x, y))
$$ (jcinmat)

is an intensity matrix.

(We saw in {doc}`an earlier lecture <kolmogorov_bwd>` that $Q$ is the intensity
matrix for the jump chain $(X_t)$ built via {prf:ref}`ejc_algo` from jump
chain pair $(\lambda, K)$.)

As we now show, every intensity matrix admits the decomposition in
{eq}`jcinmat` for some jump chain pair.


### Jump Chain Decomposition

Given an intensity matrix $Q$, set 

$$
    \lambda(x) := -Q(x, x)
    \qquad (x \in S)
$$ (lambdafromq)

Next we build $K$, first along the principle diagonal via

$$
    K(x,x) = 
    \begin{cases}
        0 & \text{ if } \lambda(x) > 0
        \\
        1 & \text{ otherwise}
    \end{cases}
$$ (kfromqxx)

Thus, if the rate of leaving $x$ is positive, we set $K(x,x) = 0$, so that the
embedded jump chain moves away from $x$ with probability one when the next
jump occurs.

Otherwise, when $Q(x,x) = 0$, we stay at $x$ forever, so $x$ is an **absorbing
state**.

Off the principle diagonal, where $x \not= y$, we set

$$
    K(x,y) = 
    \begin{cases}
        \frac{Q(x,y)}{\lambda(x)} & \text{ if } \lambda(x) > 0
        \\
        0 & \text{ otherwise }
    \end{cases}
$$ (kfromqxy)

The exercises below ask you to confirm that, for $\lambda$ and $K$ just defined, 

1. $(\lambda, K)$ is a jump chain pair and
1.  the intensity matrix $Q$ satisfies {eq}`jcinmat`.

We call $(\lambda, K)$ the **jump chain decomposition** of $Q$.

We summarize in a lemma.

```{prf:lemma}
:label: imatjc

A matrix $Q$ on $S$ is an intensity matrix if and only if there exists a jump
chain pair $(\lambda, K)$ such that {eq}`jcinmat` holds.
```


### The Conservative Case


We know from {prf:ref}`jccs` that an intensity matrix $Q$ is conservative
if and only if $\lambda$ is bounded.

Moreover, we saw in {prf:ref}`usmg` that the pairing between conservative
intensity matrices and UC Markov semigroups is one-to-one.

This leads to the following result.

```{prf:theorem}
On $S$, there exists a one-to-one correspondence between the following sets of
objects:

1. The set of all jump chain pairs $(\lambda, K)$ such that $\lambda$ is bounded.
1. The set of all conservative intensity matrices.
1. The set of all UC Markov semigroups.

```



### Simulation


In view of the preceding discussion, we have a simple way to simulate a Markov
chain given any conservative intensity matrix $Q$.

The steps are

1. Decompose $Q$ into a jump chain pair $(\lambda, K)$.
2. Simulate via {prf:ref}`ejc_algo`.


Recalling our discussion of the Kolmogorov backward equation, we know that 
this produces a Markov chain with Markov semigroup
$(P_t)$ where $P_t = e^{tQ}$ for $Q$ satisfying {eq}`jcinmat`.

(Although our argument assumed finite $S$, the proof goes through when
$S$ is countably infinite and $Q$ is conservative with very minor changes.)

In particular, $(X_t)$ is a continuous time Markov chain with intensity matrix
$Q$.




## Beyond Bounded Intensity Matrices

If we do run into an application where an intensity matrix $Q$ is not
conservative, what might we expect?

In this scenario, we can at least hope that $Q$ is the generator of a $C_0$
semigroup.

Since $Q$ is an intensity matrix, we can be sure that this semigroup will be a
Markov semigroup.

To know when $Q$ will be the generator of a $C_0$
semigroup, we need to look to the [Hille-Yoshida
Theorem](https://en.wikipedia.org/wiki/Hille%E2%80%93Yosida_theorem) and
sufficient conditions derived from it.


While we omit a detailed treatment, it is worth noting that the issue is
linked to explosions.

To see the connection, recall that some initial value problems do not lead to a
valid solution defined for all $t \in \RR_+$.

An example is the scalar problem $x'_t = 1 + x_t^2$, which has solution $x_t =
\tan (t - c)$ for some constant $c$.

But this solution equals $+\infty$ for $t \geq c + \pi/2$.

The problem is that the time path explodes to infinity in finite time.

The same issue can occur for Markov processes, if jump rates grow sufficiently
quickly.

For more discussion, see, for example, Section 2.7 of {cite}`norris1998markov`.


## Exercises

### Exercise 1

Let $P$ be a Markov matrix on $S$ and identify it with the linear operator in
{eq}`mmismo`.  Verify the claims in {eq}`propp`.

### Exercise 2

Prove the claim in {prf:ref}`scintcon`.

### Exercise 3

Confirm that $Q$ defined in {eq}`poissonq` induces a bounded linear operator on
$\ell_1$ via {eq}`imislo`.


### Exercise 4

Let $K$ be defined on $\ZZ_+ \times \ZZ_+$ by $K(i, j) = \mathbb 1\{j = i + 1\}$. 

Show that, with $K^m$ representing the $m$-th matrix product of $K$ with itself, 
we have $K^m(i, j) = \mathbb 1\{j = i + m\}$ for any $i, j \in \ZZ_+$.
    
### Exercise 5

Let $Q$ be any intensity matrix on $S$.

Prove that the jump chain decomposition of $Q$ is in fact a jump chain pair.

Prove that, in addition, this decomposition $(\lambda, K)$ satisfies {eq}`jcinmat`.





## Solutions

### Solution to Exercise 1

To determine the norm of $P$, we use the definition in {eq}`norml`.

If $f \in \ell_1$ and $\| f \| \leq 1$, then 

$$
    \| f P \| 
    \leq \sum_y \sum_x |f(x)| P(x, y)
    = \sum_x |f(x)| \sum_y P(x, y)
    = \sum_x |f(x)| 
    = \| f \|
$$

Hence $\| P \| \leq 1$.  

To see that equality holds we can repeat this argument with $f \geq 0$,
obtaining $\| fP \| = \|f\|$.

Now pick any $\phi \in \dD$.  

Clearly $\phi P \geq 0$, and 

$$
    \sum_y (\phi P)(y)
    =\sum_y \sum_x \phi (x) P(x, y)
    =\sum_x \phi (x) \sum_y P(x, y)
    = 1
$$

Hence $\phi P \in \dD$ as claimed.

### Solution to Exercise 2


Here is one solution.

Let $Q$ be an intensity matrix on $S$.

Suppose first that $m := \sup_x |Q(x,x)|$ is finite.

Set $\hat P := I + Q / m$.

It is not hard to check that $\hat P$ is a Markov matrix and that $Q = m( \hat
P - I)$.

Since $\hat P$ is a Markov matrix, it induces a bounded linear operator on
$\ell_1$ via {eq}`mmismo`.  

As $\lL(\ell_1)$ is a linear space, we see that $Q$ is likewise in
$\lL(\ell_1)$. 

In particular, $Q$ is a bounded operator, and hence conservative.

Next, suppose that $Q$ is conservative and yet $\sup_x |Q(x,x)|$ is infinite.

Choose $x \in S$ such that $|Q(x, x)| > \| Q\|$

Let $f \in \ell_1$ be defined by $f(z) = \mathbb 1\{z = x\}$.

Since $\|f\| = 1$, we have

$$
    \| Q \| 
    \geq \| f Q \|
    = \sum_y \left| \sum_z f(z) Q(z, y) \right|
    = \sum_y | Q(x, y) |
    \geq | Q(x, x) |
$$

Contradiction.

### Solution to Exercise 3

Linearity is obvious so we focus on boundedness.

For any $f \in \ell_1$ and this choice of $Q$, we have

$$
    \sum_y |(fQ)(y)|
    \leq \sum_y \sum_x |f(x) Q(x, y)|
    \leq \lambda \sum_y \sum_x |f(y) - f(y+1)|
$$

Applying the triangle inequality, we see that the right hand side is dominated
by $2 \lambda \| f\|$.

Hence $\| fQ \| \leq 2 \lambda \|f\|$, which implies that $Q \in \lL(\ell_1)$
as required.



### Solution to Exercise 4

The statement $K^m(i, j) = \mathbb 1\{j = i + m\}$ holds by definition when
$m=1$.

Now suppose it holds at arbitrary $m$.

We then have, by definition of composition (matrix multiplication),

$$
    K^{m+1}(i, j)
    = \sum_n K(i, n) K^m (n, j)
    = \sum_n K(i, n) \mathbb 1\{j = n + m\}
    = K(i, j-m)
$$

Applying the definition $K(i, j) = \mathbb 1\{j = i + 1\}$ completes verification of the claim.


### Solution to Exercise 5

Let $Q$ be an intensity matrix and let $(\lambda, K)$ be the jump chain
decomposition of $Q$.

Nonnegativity of $\lambda$ is immediate from the definition of an intensity
matrix.

To see that $K$ is a Markov matrix we fix $x \in S$ and suppose first that 
$\lambda(x) > 0$.

Then 

$$
    \sum_y K(x, y) 
    = \sum_{y \not= x} K(x,y) 
    = \sum_{y \not= x} \frac{Q(x,y)}{\lambda(x)}
    = 1
$$

If, on the other hand, $\lambda(x) = 0$, then 
$\sum_y K(x, y) = 1$, is immediate from the definition.

As $K$ is nonnegative, we see that $K$ is a Markov matrix.

Thus, $(\lambda, K)$ is a valid jump chain pair.

The proof that $Q$ and $(\lambda, K)$ satisfy {eq}`jcinmat` is mechanical and
the details are omitted.

(Try working case-by-case, with $\lambda(x) = 0, x=y$, $\lambda(x) > 0, x=y$, etc.)


