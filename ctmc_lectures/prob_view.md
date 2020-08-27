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

Let $S$ be a finite state space and let $Q$ be an intensity matrix on $S$.

(Although $S$ is held finite for now, all ideas covered here carry over
smoothly to the infinite case with appropriate definitions.)

We have {doc}`discovered <kolmogorov_fwd>` that $Q$ generates a uniquely
defined Markov semigroup, and hence a continuous time Markov chain via the
associated joint distribution.

This method of building chains from intensity matrices is important from a
theoretical perspective but less helpful in terms of intuition and simulation.

In this lecture we provide another point of view.

In particular, we provide two different ways to build a Markov chain with
intensity matrix $Q$.

One is via jump chains with state dependent jump rates.

The second is another probabilistic construction, sometimes called the
exponential clock method.

This gives two probabilistic constructions of continuous time Markov chains
associated with any given intensity matrix.

These two constructions provide intuition from multiple perspectives, as well
as valuable simulation algorithms.


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

Let $Q$ be an intensity matrix on $S$.

Recall that a Markov matrix $K$ on $S$ and a jump intensity function $\lambda$
can be used to build a continuous time Markov chain via the {ref}`jump chain algorithm <jumpchainalgo>`.

The intensity matrix is given by 

$$
    Q(x, y) = \lambda(x) (K(x, y) - I(x, y))
$$ (jcinmat)

As we now show, this is the **only** possibility, in the sense that every intensity
matrix admits the representation {eq}`jcinmat` for some rate function $\lambda$ and Markov matrix $K$.


### Construction 

For the moment, assume that $Q(x, x) < 0$ for all $x$ in $S$, which means that
there is at least some probability of leaving every state.

(The general case is treated in the exercises.)

Given such a $Q$, we set $\lambda(x) = -Q(x, x)$ for all $x$, so that
$\lambda$ is a positive rate matrix.

Next we set 

$$
    K(x,y) = 
    \begin{cases}
        0 & \text{ if } x = y
        \\
        Q(x,y) / \lambda(x) & \text{ otherwise } 
    \end{cases}
$$



## Simulation

Start with a $Q$ matrix, convert to jump chain representation, simulate.

Show by simulation that distributions coincide with $\psi_0 P_t$.






## The Gillespie Algorithm

Exponential clocks.




## Exercises

### Exercise 1

General construction of jump chain from $Q$.


## Solutions

To be added.
