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

We have seen in previous lectures that each intensity matrix on $S$ generates
a uniquely defined Markov semigroup, and hence a continuous time Markov chain
via the associated joint distribution.

This method of building chains from intensity matrices is important from a
theoretical perspective but less helpful in terms of intuition and simulation.

In this lecture we provide another point of view.

As a first step, we recall how we saw continuous time Markov chains
constructed as jump processes from a jump chain kernel $K$ and a jump
intensity function $\lambda$.

The intensity matrix was then given by 

$$
    Q(x, y) = \lambda(x) (K(x, y) - I(x, y))
$$

We show in this lecture that this is in fact the **only** possibility -- every
intensity matrix admits this representation.

This gives us a probabilistic construction of a continuous time Markov chain
associated with any given intensity matrix.

In fact there is another probabilistic construction of a chain from an
intensity matrix, sometimes called the exponential clock method.

Understanding these ideas is important for both intuition and for 
simulation algorithms.




## All CTMCs are Jump Chains 

Start with a Q matrix and construct the jump chain.

When does $Q$ admit the decomposition $Q = \lambda (K - I)$?


## Simulation

Start with a $Q$ matrix, convert to jump chain representation, simulate.

Show by simulation that distributions coincide with $\psi_0 P_t$.


## The Gillespie Algorithm

Exponential clocks.




## Exercises

To be added.


## Solutions

To be added.
