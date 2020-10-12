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

# Semigroups and Generators



## Overview

We have seen in previous lectures that every intensity matrix generates a
Markov semigroup.

We have also hinted that the pairing is one-to-one, in a sense to be made precise.

To clarify these ideas, we start in an
abstract setting, with an arbitrary initial value problem.

In this setting we introduce general operator semigroups and their generators.

Once this is done, we will be able to return to the Markov case and fully
clarify the connection between intensity matrices and Markov semigroups.

The material below is relatively technical, with most of the
complications driven by the fact that the state space can be infinite.

Such technicalities are hard to avoid, since so many interesting Markov chains
do have infinite state spaces.

* Our very first example -- the Poisson process -- has an infinite state space.
* Another example is the study of queues, which often have no natural upper
bound.[^footnotepp]

[^footnotepp]: In fact a major concern with queues is that their length does not explode. This issue cannot be properly explored unless the state space is allowed to be infinite.

Readers are assumed to have some basic familiarity with Banach spaces.

## Motivation

The general theory of continuous semigroups of operators is motivated by
the problem of solving linear ODEs in infinite dimensional spaces.[^fnpde]

[^fnpde]: An excellent introduction to operator semigroups, combined with
  applications to PDEs and Markov processes, can be found in {cite}`applebaum2019semigroups`.

More specifically, the challenge is to solve initial value problems such as 

$$
    x'_t = A x_t,
    \quad x_0 \text{ given}
$$ (abscp)

where 

* $x_t$ takes value in a Banach space at each time $t$,
* $A$ is a linear operator and
* the time derivative $x'_t$ uses a definition appropriate for a Banach
  space.

This problem is also called the "abstract Cauchy problem".

Why do we need to solve such problems?

One example comes from PDEs.  

PDEs tell us how functions change over time, starting from an infinitesimal
description.

When $x_t$ is a point in a function space, this fits into the framework of
{eq}`abscp`.

Another example comes from Markov processes, where, as we have seen, the flow
of distributions over time can be represented as a linear ODE in distribution
space.

If the number of state is infinite, then the space of distributions is
infinite dimensional.

This is another version of {eq}`abscp`, and we return to it after a discussion
of the general theory.

To give a high level view of the results below, the solution to the Cauchy
problem is represented as a trajectory $t \mapsto U_t x_0$ from the initial
value $x_0$ under a semigroup of maps $(U_t)$.

The operator $A$ in {eq}`abscp` is called the "generator" of $(U_t)$ and is
its infinitesimal description.



## Preliminaries

Throughout this lecture, $(\BB, \| \cdot \|)$ is a Banach space.


### The Space of Linear Operators

You will recall that a **linear operator** on $\BB$ is a map $A$ from $\BB$ to
itself satisfying 

$$
    A(\alpha g + \beta h) = \alpha A g + \beta A h,
    \quad
    \forall \, g, h \in \BB, \;\; \alpha, \beta \in \RR
$$

The operator $A$ is called **bounded** if

$$
    \| A \| := \sup_{g \in \BB, \, \| g \| \leq 1} \| A g \| < \infty
$$ (norml)

This is the usual definition of a [bounded linear operator](https://en.wikipedia.org/wiki/Bounded_operator) on a normed linear space.

The set of all bounded linear operators on $\BB$ is denoted by $\linop$ and is
itself a Banach space.


Sums and scalar products of elements of $\linop$ are defined in the usual way,
so that, for $\alpha \in \RR$, $A, B \in \linop$ and $g \in \BB$, we have 

$$
    (A + B) g = Ag + Bg, 
    \quad (\alpha A) g = \alpha (A g)
$$

and so on.

We write $A B$ to indicate composition of the operators $A, B \in \linop$.

The value defined in {eq}`norml` is called the **operator norm** of $A$ and,
as suggested by the notation, [is a norm](https://en.wikipedia.org/wiki/Operator_norm) on $\linop$.

In addition to being a norm, it enjoys the submultiplicative property $\| AB
\| \leq \| A \| \| B\|$ for all $A, B \in \linop$.


Let $I$ be the identity in $\linop$, satisfying $Ig = g$ for all $g \in \BB$.

(In fact $\linop$ is a [unital Banach algebra](https://en.wikipedia.org/wiki/Banach_algebra) when multiplication is identified with operator composition and $I$ is adopted as the unit.)



### The Exponential Function

Given $A \in \linop$, the exponential of $A$ is the element of
$\linop$ defined as

$$
    e^A  
    = \sum_{k \geq 0} \frac{A^k}{k!} 
    = I + A + \frac{A^2}{2!} + \cdots
$$ (opexpo)

This is the same as the definition for the matrix exponential.The exponential function arises naturally as the solution to ODEs in Banach
space, one example of which (as we shall see) is distribution flows
associated with continuous time Markov chains.

The exponential map has the following properties:

* For each $A \in \linop$, the operator $e^A$ is a well defined element of $\linop$ with $\| e^A \| \leq e^{\| A \|}$.[^fncoex]
* $e^0 = I$, where $0$ is the zero element of $\linop$.
* If $A, B \in \linop$ and $AB = BA$, then $e^{A + B} = e^A e^B$
* If $A \in \linop$, then $e^A$ is invertible and $(e^A)^{-1} = e^{-A}$.

The last fact is easily checked from the previous ones.


[^fncoex]: Convergence of the sum in {eq}`opexpo` follows from boundedness of $A$ and the fact that $\linop$ is a Banach space.



### Operator Calculus 

Consider a function 

$$
    \RR_+ \ni t \mapsto U_t \in \linop
$$

which we can think of as a time path in $\linop$, such as a flow of Markov
operators.

We say that this function is **differentiable at $\tau \in \RR_+$** if there exists
an element $T$ of $\linop$ such that

$$
    \frac{U_{\tau+h} - U_\tau}{h} \to T 
    \; \text{ as } h \to 0
$$ (devlim)

In this case, $T$ is called the **derivative** of the function $t \mapsto U_t$ at $\tau$ and we write

$$
    T = U'_\tau 
    \; \text{ or } \;
    T = \frac{d}{dt} U_t \, \Big|_{t=\tau}
$$

(Convergence of operators is in operator norm.  If $\tau = 0$, then the limit
$h \to 0$ in {eq}`devlim` is the right limit.)

```{proof:example}
If $U_t = t V$ for some fixed $V \in \linop$, then it is easy to
see that $V$ is the derivative of $t \mapsto U_t$ at every $t \in \RR_+$.
```

```{proof:example}
In {doc}`our discussion <kolmogorov_fwd>` of the Kolmogorov forward equation 
when $S$ is finite, we introduced the derivative of a map $t
\mapsto P_t$, where each $P_t$ is a matrix on $S$.

The derivative was defined by differentiating $P_t$ element-by-element.

This coincides with the operator-theoretic definition in {eq}`devlim` when $S$
is finite, because then the space $\lL(\ell_1)$ is finite dimensional, and
hence pointwise and norm convergence coincide.
```

Analogous to the matrix and scalar cases, we have the following result:

```{proof:lemma} Differentiability of the Exponential Curve
:label: diffexpmap

For all $A \in \linop$, the exponential curve $t \mapsto e^{tA}$ is everywhere differentiable and 

$$
    \frac{d}{dt} e^{tA} = e^{tA} A = A e^{tA}
$$ (expdiffer)
```

The proof is a (solved) exercise (see below).


## Semigroups and Generators

For continuous time Markov chains where the state space $S$ is finite, we
saw that Markov semigroups often take the form $P_t = e^{tQ}$ for some
intensity matrix $Q$.

This is ideal because the entire semigroup is characterized in a simple way by
its infinitesimal description $Q$.

It turns out that, when $S$ is finite, this is always true:  if $(P_t)$ is a
Markov semigroup, then there exists an intensity matrix $Q$ satisfying $P_t =
e^{tQ}$ for all $t$.

Moreover, this statement is again true when $S$ is infinite, provided that
some restrictions are placed on the semigroup.

Our aim is to make these statements precise, starting in an abstract setting
and then specializing.


### Operator Semigroups

Let $U_t$ be an element of $\linop$ for all $t \in \RR_+$

We say that $(U_t)$ is an **evolution semigroup** on $\linop$ if $U_0 = I$ and
$U_{s + t} = U_s U_t$ for all $s, t \geq 0$.

The idea is that $(U_t)$ generates a path in $\BB$ from any starting point $g \in \BB$, so that $U_t g$ is interpreted as the location of the state after $t$ units of time.

An evolution semigroup $(U_t)$ is called 

* a $C_0$ **semigroup** on $\BB$ if, for each $g \in \BB$, the map $t \mapsto U_t g$ from $\RR_+$ to $\BB$ is continuous, and
* a **uniformly continuous semigroup** on $\BB$ if the map $t \mapsto U_t$ from $\RR_+$ to $\linop$ is continuous.

In what follows we abbreviate "uniformly continuous" to UC.[^ucnote]

[^ucnote]: Be careful: the definition of a UC semigroup requires that 
$t \mapsto U_t$ is continuous as a map into $\linop$, rather than uniformly
continuous.  The UC terminology comes about because, for a UC semigroup, we
have, by definition of the operator norm,
$\sup_{\| g \| \leq 1} \| U_s g - U_t g \| \to 0$ when $s \to t$.


```{proof:example} Exponential curves are UC semigroups
:label: ecuc

If $U_t = e^{tA}$ for $t \in \RR_+$ and $A \in \linop$, then $(U_t)$
is a uniformly continuous semigroup on $\BB$.
```

The claim that $(U_t)$ is an evolution semigroup follows directly from the
properties of the exponential function given above.

Uniform continuity can be established using arguments similar to those in the
proof of differentiability in {proof:ref}`diffexpmap`. 

Since norm convergence on $\linop$ implies pointwise convergence, every
uniformly continuous semigroup is a $C_0$ semigroup.

The reverse is certainly not true --- there are many important $C_0$ semigroups that fail to be uniformly continuous.

In fact semigroups associated with PDEs, diffusions and other Markov processes
on continuous state spaces are typically $C_0$ but not uniformly continuous.

There are also important examples of Markov semigroups on infinite
discrete state spaces that fail to be uniformly continuous.

However, we will soon see that, for most continuous time Markov chains used in
applications, the semigroups are uniformly continuous.




### Generators

Consider a continuous time Markov chain on a finite state space with intensity
matrix $Q$.

The Markov semigroup $(P_t)$ is fully specified by this infinitesimal
description $Q$, in the sense that 

* $P_t = e^{tQ}$ for all $t \geq 0$ and (equivalently)
* the forward and backward equations hold: $P_t' = P_t Q = Q P_t$.

Since $P_0 = I$, the matrix $Q$ can be recovered from the semigroup via 

$$
    Q = P'_0 = \lim_{h \downarrow 0} \frac{P_h - I}{h} 
$$

In the more abstract setting of $C_0$ semigroups, we say that $Q$ is the
"generator" of the semigroup $P_t$.

More generally, given a $C_0$ semigroup $(U_t)$, we say that a linear
operator $A$ from $\BB$ to itself is the **generator** of $(U_t)$ if 

$$
    A g = \lim_{h \downarrow 0} \frac{U_h g - g}{h} 
$$ (defgenr)

for all $g \in \BB$ such that the limit exists.  

The set of points where the limit exists (the domain of the generator) is
denoted by $D(A)$.

At this point we would like to write {eq}`defgenr` as $A = U'_0$, or express
$U_t$ as $e^{tA}$, analogous to the Markov case.

There are problems, however.

One problem is that the limit in {eq}`defgenr` can fail to exist for some $g
\in \BB$.

Indeed, why should the limit exist, given that $C_0$ semigroups are not
required to be differentiable?

The other problem is that, even though the limit exists, the linear operator
$A$ is not bounded (i.e., not an element of $\linop$), so 
a statement like $U_t = e^{tA}$ is problematic.

It turns out that, despite these issues, the theory of $C_0$ semigroups is
powerful, and, with some work, the technical issues can be
circumvented.[^fnhy]

[^fnhy]: An excellent treatment of the general theory of $C_0$ semigroups, can be found in {cite}`bobrowski2005functional`.

Even better, for the applications we wish to consider, we can focus on UC
semigroups, where these problems do not arise.

The next section gives details.


### A Characterization of Uniformly Continuous Semigroups

We saw in {proof:ref}`ecuc` that exponential curves are an example
of a UC semigroup.

The next theorem tells us that there are no other examples.

```{proof:theorem} UC Semigroups are Exponential Curves
:label: ucsgec

If $(U_t)$ is a UC semigroup on $\BB$, then there exists an $A \in \linop$
such that $U_t = e^{tA}$ for all $t \geq 0$.  Moreover,

* $U_t$ is differentiable at every $t \geq 0$,
* $A$ is the generator of $(U_t)$ and
* $U_t' = A U_t = U_t A$ for all $t \geq 0$.
```

The last three claims in {proof:ref}`ucsgec` follow directly from the
first claim.

The statement $U_t' = A U_t = U_t A$ is a
generalization of the Kolmogorov forward and backward equations.

While slightly more complicated in the Banach setting, the proof of the first
claim (existence of an exponential representation) is a direct extension of
the fact that any continuous function $f$ from $\RR$ to itself
satisfying 

* $f(s)f(t) = f(s+t)$ for all $s,t \geq 0$ and
* $f(0) = 1$ 

also satisfies $f(t) = e^{ta}$ for some $a \in \RR$.

We proved something quite similar in {proof:ref}`exp_unique`, on 
the memoryless property of the exponential function.

For more discussion of the scalar case, see, for example,
{cite}`sahoo2011introduction`.  

For a full proof of the first claim in {proof:ref}`ucsgec`, in the setting of
a Banach algebra, see, for
example, Chapter 7 of {cite}`bobrowski2005functional`.





## Exercises

### Exercise 1

Prove that {eq}`expdiffer` holds for all $A \in \linop$.

### Exercise 2

In many texts, a $C_0$ semigroup is defined as an evolution semigroup $(U_t)$
such that 

$$
    U_t g \to g \text{ as } t \to 0 \text{ for any } g \in \BB
$$ (czsg2)

Our aim is to show that {eq}`czsg2` implies continuity at every point $t$, as
in the definition we used above.

The [Banach--Steinhaus Theorem](https://en.wikipedia.org/wiki/Uniform_boundedness_principle) can be used to show that, for an evolution semigroup $(U_t)$ satisfying {eq}`czsg2`, there exist finite constants $\omega$ and $M$ such that

$$ 
    \| U_t \| \leq e^{t\omega} M 
    \quad \text{for all } \; t \geq 0
$$ (sgbound)

Using this and {eq}`czsg2`, show that, for any $g \in \BB$, the map $t \mapsto
U_t g$ is continuous at all $t$.


### Exercise 3

Following on from the previous exercise, 
a UC semigroup is often defined as an evolution semigroup $(U_t)$
such that 

$$
    \| U_t - I \| \to 0 \text{ as } t \to 0 
$$ (czsg3)

Show that {eq}`czsg3` implies norm continuity at every point $t$, as
in the definition we used above.

In particular, show that, for any $t_n \to t$, we have
$\| U_{t_n} - U_t \| \to 0$  as $n \to \infty$.



## Solutions

### Solution to Exercise 1

To show the first equality, fix $t \in \RR_+$, take $h > 0$ and observe that

$$
    e^{(t+h)A} - e^{tA} - e^{tA} A
    = e^{tA} (e^{hA} - I - A)
$$

Since the norm on $\linop$ is submultiplicative, it suffices to show that 
$\| e^{hA} - I - A \| = o(h)$ as $h \to 0$.

Using the definition of the exponential, this is easily verified,
completing the proof of the first equality in {eq}`expdiffer`.

The proof of the second equality is similar.


### Solution to Exercise 2

Let $(U_t)$ be an evolution semigroup satisfying {eq}`czsg2` and let
$\omega$ and $M$ be as in {eq}`sgbound`.

Pick any $g \in \BB$,  $t > 0$ and $h_n \downarrow 0$ as $n \to \infty$.  

On one hand, $U_{t+ h_n} g = U_{h_n} U_t g \to U_t g$ by {eq}`czsg2`.

On the other hand, from {eq}`sgbound` and the definition of the operator norm,

$$
    \| U_{t-h_n} g - U_t g\|
    = \|  U_{t-h_n} ( g - U_{h_n} g) \|
    \leq e^{(t-h_n)\omega} M \| g - U_{h_n} g\|
    \to 0
$$

as $n \to \infty$.  This completes the proof.

### Solution to Exercise 3

The solution is similar to that of the previous exercise.

Let $(U_t)$ be an evolution semigroup satisfying {eq}`czsg3`,
fix $t > 0$ and take $(h_n)$ to be a scalar sequence satisfying $h_n \downarrow 0$ as $n \to \infty$.  

On one hand, $U_{t+ h_n} = U_{h_n} U_t \to U_t $ by {eq}`czsg3`.

On the other hand, from the submultiplicative property of the operator norm
and {eq}`sgbound`,

$$
    \| U_{t-h_n} - U_t \|
    = \|  U_{t-h_n} ( I - U_{h_n}) \|
    \leq e^{(t-h_n)\omega} M  \| I - U_{h_n} \|
$$

This converges to 0 as $n \to \infty$, completing our proof.
