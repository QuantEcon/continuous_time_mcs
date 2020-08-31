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



## Preliminaries

Throughout this lecture, $(\BB, \| \cdot \|)$ is a Banach space.

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

Let $I$ be the identity in $\linop$, satisfying $Ig = g$ for all $g \in \BB$.

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

(In fact $\linop$ is a [unital Banach algebra](https://en.wikipedia.org/wiki/Banach_algebra) when multiplication is identified with operator composition.)



### The Exponential Function

Given $A \in \linop$, the exponential of $A$ is the element of
$\linop$ defined as

$$
    e^A  
    = \sum_{k \geq 0} \frac{A^k}{k!} 
    = I + A + \frac{A^2}{2!} + \cdots
$$ (opexpo)

This is the same as the definition for the matrix exponential.

The exponential function arises naturally as the solution to ODEs in Banach
space, one example of which (as we shall see) is distribution flows
associated with continuous time Markov chains.

The exponential map has the following properties:

* For each $A \in \linop$, the operator $e^A$ is a well defined element of $\linop$ with $\| e^A \| \leq e^{\| A \|}$.
* $e^0 = I$, where $0$ is the zero element of $\linop$.
* If $A, B \in \linop$ and $AB = BA$, then $e^{A + B} = e^A e^B$
* If $A \in \linop$, then $e^A$ is invertible and $(e^A)^{-1} = e^{-A}$.

The last fact is easily checked from the previous ones.



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

For example, if $U_t = t V$ for some fixed $V \in \linop$, then it is easy to
see that $V$ is the derivative of $t \mapsto U_t$ at every $t \in \RR_+$.

A more interesting example is the exponential map $t \mapsto e^{tA}$, where
$A$ is a fixed element of $\linop$.

Analogous to the matrix and scalar cases, we have the following result:

```{proof:lemma} Differentiability of the exponential map
:label: diffexpmap

For all $A \in \linop$, the map $t \mapsto e^{tA}$ is everywhere differentiable and 

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

We say that $(U_t)$ is a **evolution semigroup** on $\linop$ if $U_0 = I$ and
$U_{s + t} = U_s U_t$ for all $s, t \geq 0$.

The idea is that $(U_t)$ generates a path in $\BB$ from any starting point $g \in \BB$, so that $U_t g$ is interpreted as the location of the state after $t$ units of time.

An evolution semigroup $(U_t)$ is called 

* a $C_0$ **semigroup** on $\BB$ if, for each $g \in \BB$, the map $t \mapsto U_t g$ from $\RR_+$ to $\BB$ is continuous, and
* a **uniformly continuous semigroup** on $\BB$ if the map $t \mapsto U_t$ from $\RR_+$ to $\linop$ is continuous.

In what follows we abbreviate "uniformly continuous" to UC.

```{note}
Be careful: the definition of a UC semigroup requires that 
$t \mapsto U_t$ is continuous as a map into $\linop$, rather than uniformly
continuous.  

The UC terminology comes about because, for a UC semigroup, we have, by
definition of the operator norm,

$$
    s \to t
    \; \implies \;
    \sup_{\| g \| \leq 1} \| U_s g - U_t g \| \to 0
$$

```


```{proof:example} Exponential curves are UC semigroups
:label: ecuc

If $U_t = e^{tA}$ for $t \in \RR_+$ and $A \in \linop$, then $(U_t)$
is a uniformly continuous semigroup on $\BB$.
```

The claim that $(U_t)$ is an evolution semigroup follows directly from the
properties of the exponential function given above.

Uniform continuity can be established using arguments similar to those in our
proof of differentiability in {proof:ref}`diffexpmap`, which is a
solved exericse.

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
$$

for all $g \in \BB$ such that the limit exists.  

The set of points where the limit exists (the domain of the generator) is
denoted by $D(A)$.

There are two key problems to consider here.

One is that the limit fails to exist for some $g \in \BB$, which is eminently
possible, given that $C_0$ semigroups are not required to be differentiable.

* It can be shown that $D(A)$ is always dense in $\BB$ however --- see 7.4.15
  of {cite}`bobrowski2005functional`.

The other problem is that, even though the limit exists, the linear operator
$A$ is not bounded (i.e., not an element of $\linop$), and hence relatively
difficult to work with.

Fortunately, given the applications we wish to consider, we can focus on UC
semigroups, where these problems do not arise.[^fnhy]

The next section gives details.

[^fnhy]: For the general theory of $C_0$ semigroups, an excellent treatment can be found in {cite}`bobrowski2005functional`.


### A Characterization of Uniformly Continuous Semigroups

We saw in {proof:ref}`ecuc` that exponential curves are an example
of a UC semigroup.

The next theorem tells us that there are no other examples.

```{proof:theorem} UC Semigroups are Exponential Curves
:label: ucsgec

If $(U_t)$ is a UC semigroup on $\BB$, then there exists an $A \in \linop$
such that $U_t = e^{tA}$ for all $t \geq 0$.  Moreover,
 $A$ is the generator of $(U_t)$ and
 $U_t' = A U_t = U_t A$ for all $t \geq 0$.
```

The last two claims in {proof:ref}`ucsgec` follow directly from the
first claim.

For a proof of the first claim in {proof:ref}`ucsgec`, see, for
example, Chapter 7 of {cite}`bobrowski2005functional`.

While slightly more complicated in the Banach setting, the proof is a direct
extension of the fact that any continuous function $f$ from $\RR$ to itself
satisfying 

* $f(s)f(t) = f(s+t)$ for all $s,t \geq 0$ and
* $f(0) = 1$ 

also satisfies $f(t) = e^{ta}$ for some $a \in \RR$.

We proved something quite similar in {proof:ref}`exp_unique`, on 
the memoryless property of the exponential function.

For more discussion along these see, for example, {cite}`sahoo2011introduction`. 
The statement $U_t' = A U_t = U_t A$ is a generalization of the Kolmogorov
forward and backward equations.







## Exercises

### Exercise 1

Prove {proof:ref}`expdiffer`.

### Exercise 2

Add a discussion of the abstract Cauchy problem here, with exercises?

See p 208 of Lasota and Mackey.

### Exercise 3

Given an example of a semigroup that is $C_0$ but not UC?  How about a
translation?


## Solutions

To be added.

### Solution to Exercise 1

```{proof:proof}
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
```
