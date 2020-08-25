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


# Infinite State Spaces


## Overview

Motivation: our very first example (Poisson process) has an infinite state
space.

A key result: one-to-one pairing between bounded linear operators on
$\ell_1(S)$ and uniformly continuous semigroups.

For the unbounded case we have to look to the Hille-Yoshida theorem.

Now specialize to Markov semigroups with bounded generators.

Define a conservative intensity operator to be a bounded linear operator with
zero "row" sums.

Show that there is a one-to-one pairing between such operators and uniformly
continuous Markov semigroups, via generators.

Show that the Kolmogorov equations hold.

[KFE and KBE are "dual" to each other, in that they use dual (adjoint)
representations of the infinitesimal generator.]

We will use the following imports

```{code-cell} ipython3
import numpy as np
import scipy as sp
import matplotlib.pyplot as plt
import quantecon as qe
from numba import njit

from mpl_toolkits.mplot3d import Axes3D
from mpl_toolkits.mplot3d.art3d import Poly3DCollection

```



##  Foobar

Notation:

* $\ell_1(S)$ is all **summable functions** on $S$; that is, all $g \, \colon S \to \mathbb R$ with $\sum_x |g(x)| < \infty$,
* $bS$ is all **bounded functions** on $S$; that is, all $h \, \colon S \to \mathbb R$ with $\sup_x |g(x)| < \infty$, and

As usual, a **linear operator** on $\ell_1(S)$ is a map $L$ from $\ell_1(S)$ to itself
satisfying 

$$
    L(\alpha g + \beta h) = \alpha L g + \beta L h,
    \quad
    \forall \, g, h \in \ell_1(S), \;\; \alpha, \beta \in \mathbb R
$$

A linear operator on $bS$ is defined analogously.


It is not difficult to check that, in the case where $S$ is finite, $P$ is a
Markov matrix if and only if $\phi P$ is in $\mathcal D$ whenever $\phi$ is in
$\mathcal D$.

Also, it is an elementary result of linear algebra that there is a one-to-one correspondence between the set of linear operators from an $n$-dimensional vector space into itself and the set of $n \times n$ matrices.

Hence, when the state space is finite, the set of Markov matrices is in
one-to-one correspondence with the set of linear operators that map $\mathcal
D$ to itself.

Since this second specification applies equally well in the countable case, we
adopt it as our definition.

In particular, a **Markov operator** $P$ is a linear operator from $\ell_1(S)$
to itself satisfying $\phi P \in \mathcal D$ whenever $\phi \in \mathcal D$.

Notice that we continue to write arguments to the left of the operator, 



## Infintessimal Generators

If $Q$ is a transition rate matrix and $P_t = e^{tQ}$ for all $t$, then 
the family of matrices $\{P_t\}$ is called a **Markov semigroup**.

In this context, $Q$ is called the **infintessimal generator** of the semigroup.

The name "semigroup" refers to the fact that $P_s P_t = P_{s+t}$, as you can 
easily verify using the properties of the exponential function.

In the present context, the equality $P_s P_t = P_{s+t}$ is called the 
**Chapman-Kolmogorov equation**.



## Dual form of the Generator

In some studies, the generator of a Markov process is presented as an operator
that acts on functions.

In this section we clarify the connection.

$$
    (A h)(x) := \lim_{t \downarrow 0} \frac{(P_t h)(x) - h(x)}{t}
$$

(or should the limit use norms?)


## A Note on Explosions

We return now to a technical issue mentioned above.

We define $(X_t)$ as 

$$
    X_t = \sum_{k \geq 0} Y_k \mathbb 1\{J_k \leq t < J_{k+1}\}
    \qquad (t \geq 0)
$$ 

This construction assumes that $J_k \to \infty$ with probability one, so that $X_t$ is well defined for all $t \geq 0$.

[What does this require?  What might happen if it fails?]


