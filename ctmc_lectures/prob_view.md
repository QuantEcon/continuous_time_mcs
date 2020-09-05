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


# A Probabilistic View


## Overview

Let $S$ be a countable state space and let $Q$ be a conservative intensity
matrix on $S$.

We know that $Q$ generates a UC Markov semigroup, and from this semigroup we
can produce a continuous time Markov chain via the associated joint distribution.

This method of building chains from intensity matrices is important from a
theoretical perspective but less helpful in terms of intuition and simulation.

In this lecture we provide another point of view.

In particular, we provide two different ways to build a Markov chain with
intensity matrix $Q$.

One is via jump chains with state dependent jump rates.

The second is another probabilistic construction, sometimes called Gillespie's
Algorithm.

These two constructions provide intuition from multiple perspectives and
valuable simulation algorithms.

We will use the following imports

```{code-cell} ipython3
import numpy as np
import scipy as sp
import matplotlib.pyplot as plt
import quantecon as qe
from numba import njit
from scipy.linalg import expm
```


## From Intensity Matrix to Jump Chain

Let us agree to call $(\lambda, K)$ a **jump chain pair** if $\lambda$ is a
map from $S$ to $\RR_+$ and $K$ is a Markov matrix on $S$.

It is easy to verify that the matrix $Q$ on $S$ defined by 

$$
    Q(x, y) := \lambda(x) (K(x, y) - I(x, y))
$$ (jcinmat)

is an intensity matrix.

(We saw in {doc}`an earlier lecture <kolmogorov_bwd>` that $Q$ is the intensity
matrix for the jump chain $(X_t)$ built via {proof:ref}`ejc_algo` from jump
chain pair $(\lambda, K)$.)

As we now show, every intensity matrix admits the decomposition in
{eq}`jcinmat` for some jump chain pair.


(constlk)=
### Construction 

Given a intensity matrix $Q$, set 

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

```{proof:lemma}
:label: imatjc

A matrix $Q$ on $S$ is an intensity matrix if and only if there exists a jump
chain pair $(\lambda, K)$ such that {eq}`jcinmat` holds.
```


### The Conservative Case


We know from {proof:ref}`jccs` that an intensity matrix $Q$ is conservative
if and only if $\lambda$ is bounded.

Moreover, we saw in {proof:ref}`usmg` that the pairing between conservative
intensity matrices and UC Markov semigroups is one-to-one.

This leads to the following result.

```{proof:theorem}
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
2. Simulate via {proof:ref}`ejc_algo`.


Recalling our discussion of the Kolmogorov backward equation, we know that 
this produces a Markov chain with Markov semigroup
$(P_t)$ where $P_t = e^{tQ}$ for $Q$ satisfying {eq}`jcinmat`.

(Although our argument assumed finite $S$, the proof goes through when
$S$ is contably infinite and $Q$ is conservative with very minor changes.)

In particular, $(X_t)$ is a continuous time Markov chain with intensity matrix
$Q$.



## The Gillespie Algorithm

Exponential clocks.

Show by simulation that distributions coincide with $\psi_0 P_t$.





## Exercises

### Exercise 1

Let $Q$ be any intensity matrix on $S$.

Prove that the jump chain decomposition of $Q$ is in fact a jump chain pair.

Prove that, in addition, this decomposition $(\lambda, K)$ satisfies {eq}`jcinmat`.

## Solutions

### Solution to Exercise 1

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
