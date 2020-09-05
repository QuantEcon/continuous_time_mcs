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


# Stationarity and Ergodicity


## Overview

To be added.  

Use the distribution flow figures from markov_prop.md, this time starting from
many different distributions.

Suggests ergodicity.

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



## Stationary Distributions

Let $(P_t)$ be a Markov semigroup on countable state space $S$.  

A distribution $\psi \in \dD$ is called **stationary** for $(P_t)$ if

$$
    \psi P_t = \psi 
    \text{ for all } t \geq 0
$$

In many cases, it is easier to use the generator of the semigroup to identify
stationary distributions.

The next result makes this possible.

It is analogous to the idea that a point $\bar x$ in $\RR^d$ is stationary for
a vector ODE $x'_t = F(x_t)$ when $F(\bar x) = 0$.

It holds true under weaker conditions but the version stated here is easy to
prove and sufficient for most cases we consider.

```{proof:theorem}
:label: statfromq

For a conservative intensity matrix $Q$ on $S$ and 
associated Markov semigroup $(P_t)$, a distribution $\psi$ on $S$ is stationary 
for $(P_t)$ if and only if $\psi Q = 0$.
```

```{proof:proof}
Suppose first that $\psi \in \dD$ and $\psi Q = 0$.

Since $Q$ is conservative, $(P_t)$ is a UC semigroup with $P_t = e^{tQ}$ for
all $t$, and hence, for any $t \geq 0$,

$$
    \psi e^{tQ} = \psi + t \psi Q + t^2 \frac{\psi Q^2}{2!} 
    + \cdots
$$

From $\psi Q = 0$ we get $\psi Q^k = 0$ for all $k \in \NN$, so the last 
display yields $\psi P_t = \psi$.

Hence $\psi$ is stationary for $(P_t)$.

Now suppose that $\psi$ is stationary for $(P_t)$ and set $D_t := (1/t) (P_t -
I)$.

From the triangle inequality and the definition of the operator norm, for any given $t$,

$$
    \| \psi Q \| 
    \leq \| \psi (Q - D_t) \| + \| \psi D_t \|
    \leq \| Q - D_t \| + \| \psi D_t \|
$$

Since $(P_t)$ is UC and $Q$ is its generator, we have $\| D_t - Q \| \to 0$ in
$\lL(\ell_1)$ as $t \to 0$ from the right.

Hence $\| \psi Q \| \leq \liminf_{t \to 0} \| \psi D_t \|$.

As $\psi$ is stationary, $\psi D_t = 0$ for all $t$.

Hence $\psi Q = 0$, as was to be shown.
```



## Irreducibility and Uniqueness

Let $(P_t)$ be a Markov semigroup on $S$.

We say that state $y$ is **accessible** from state $x$ if
there exists a $t \geq 0$ such that $P_t(x, y) > 0$.

A Markov semigroup $(P_t)$ on $S$ is called **irreducible** if $y$ is
accessible from $x$ for every $(x,y) \in S \times S$.

We seek a characterization of irreducibility of $(P_t)$ in terms of its
generator.

As a first step, we will say there is a **$Q$-positive probability flow** from $x$
to $y$ if there exists a finite sequence $(z_i)_{i=0}^m$ in $S$ starting at
$x=z_0$ and ending at $y=z_m$ such that $Q(z_i, z_{i+1}) > 0$ for all $i$.


```{proof:lemma}
:label: equivirr

For distinct states $x$ and $y$, the following statements are equivalent:

1. The state $y$ is accessible from $x$ under $(P_t)$.
1. There is a positive probability flow from $x$ to $y$ under $Q$.
```

((prove only for the UC case?))

```{proof:proof}
For distinct states $x$ and $y$, we have

$$
    P_t(x, y) = t Q(x,y) + \frac{t^2}{2!} Q^2(x, y) + \cdots
$$ (ptexpan)

If $x$ is accessible from $y$, then $P_t(x, y) > 0$ for some $t > 0$, and hence
$Q^k(x,y) > 0$ for at least one $k \in \NN$.

Writing out the matrix product as a sum, we now have

$$
    Q^k(x,y) =
    \sum_{z_1}
    \sum_{z_2}
    \cdots
    \sum_{z_{k-1}}
        Q(x, z_1) Q(z_1, z_2) \cdots Q(z_{k-1}, y) 
        > 0
$$  (qkassum)

It follows that at least one element of the sum must be strictly positive, so
positive probability flow from $x$ to $y$ is established.

To prove the converse, suppose there is positive probability flow from $x$ to
$y$.

We can then take a finite sequence $(z_i)_{i=1}^m$ starting at $x$ and ending
at $y$ with $Q(z_i, z_{i+1}) > 0$ for all $i$.

We can and do assume that all elements of $(z_i)_{i=1}^m$ are distinct.

Let $\lambda$ be defined by {eq}`lambdafromq` and let $K$ be defined by
{eq}`kfromqxx` and {eq}`kfromqxy`.

From this pair $(\lambda, K)$ we build the jump chain via {proof:ref}`ejc_algo`, with $\psi = \delta_x$.

This produces a continuous time Markov chain $(X_t)$ that starts at $X_0 = x$,
and jumps at times $(J_k)$.

We will have $X_t = x$ if, in the time interval $[0, t]$, there are $m-1$
jumps and $Y_m = y$.

```


Irreducible implies aperiodic.

```{proof:theorem}
For a ((UC)) Markov semigroup $(P_t)$, the following statements are
equivalent:

1. $(P_t)$ is irreducible.
1. $P_t(x,y) > 0$ for all $t > 0$ and all $(x,y) \in S \times S$.
```

```{proof:proof}

To be added.
```


Irreducible implies uniqueness.



## Asymptotic Stabiltiy

To be added.

Include Foguel alternative?

Thm 6.2 of RR and MTK.


