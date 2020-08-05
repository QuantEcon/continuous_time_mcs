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

Follows on from the analytic discussion linking ODEs, rate kernels and
semigroups.

We are now convinced that every continuous time Markov chain on $S$ arises
from a rate matrix.

We've also seen continuous time Markov chains constructed as jump processes
from a jump chain kernel $\Pi$ and a jump intensity function $\lambda$.

(The rate matrix is $Q = \lambda (\Pi - I)$.)

We show in this lecture that this is in fact the only possibility -- every
rate matrix admits this representation.

As a result, every continuous time Markov chain can be viewed as jump
processes from a jump chain kernel $\Pi$ and a jump intensity function
$\lambda$.

This gives us a probabilistic view and opens up algorithms for simulation.

Mention Gillespie algorithm.



## All CTMCs are Jump Chains 

Start with a Q matrix and construct the jump chain.

When does $Q$ admit the decomposition $Q = \lambda (\Pi - I)$?


## Simulation

Start with a $Q$ matrix, convert to jump chain representation, simulate.

Show by simulation that distributions coincide with $\psi_0 P_t$.


## The Gillespie Algorithm

Exponential clocks.




## Exercises

To be added.


## Solutions

To be added.
