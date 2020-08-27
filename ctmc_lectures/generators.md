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

We wish to clarify these ideas, and in doing so it is helpful to begin in an
abstract setting, with an arbitrary initial value problem.

In this setting we introduce general operator semigroups and their generators.

Once this is done, we will be able to return to the Markov case and fully
clarify the connection between intensity matrices and Markov semigroups.

Note that the material below is relatively technical, with most of the
complications driven by the fact that the state space can be infinite.

In the end, such technicalities cannot be avoided, since so many interesting
Markov chains do have infinite state spaces.

Even our very first example -- the Poisson process -- has an infinite state space.

Another example is the study of queues, which often have no natural upper
bound.

(In fact a major concern with queues is that their length does not explode,
and this issue cannot be properly explored unless the state space is
infinite.)


## Preliminaries

Throughout this lecture, $(\mathbb B, \| \cdot \|)$ is a Banach space.

You will recall that a **linear operator** on $\mathbb B$ is a map $L$ from $\mathbb B$ to
itself satisfying 

$$
    L(\alpha g + \beta h) = \alpha L g + \beta L h,
    \quad
    \forall \, g, h \in \mathbb B, \;\; \alpha, \beta \in \mathbb R
$$

The operator $L$ is called **bounded** if

$$
    \| L \| := \sup_{g \in \mathbb B, \, \| g \| \leq 1} \| L g \| < \infty
$$ (norml)

This is the usual definition of a [bounded linear operator](https://en.wikipedia.org/wiki/Bounded_operator) on a normed linear space.

The value defined in {eq}`norml` is called the **operator norm** of $L$.

The set of all bounded linear operators on $\mathbb B$ is denoted by $\mathcal L(\mathbb B)$.

Sums and scalar products of elements of $\mathcal L(\mathbb B)$ are defined in the
usual way, so that, for $A, B \in \mathcal L(\mathbb B)$ and $g \in \mathbb B$, we have (A +
B) g = Ag + Bg and so on.

As suggested by the notation, the operator norm [is a norm](https://en.wikipedia.org/wiki/Operator_norm) on $\mathcal L(\mathbb B)$.

In addition to being a norm, it enjoys the submultiplicative property $\| AB
\| \leq \| A \| \| B\|$ for all $A, B \in \mathcal L(\mathbb B)$.


### The Exponential Function

Given $A \in \mathcal L(\mathbb B)$, the exponential of $A$ is defined as

$$
    e^A  
    = \sum_{k \geq 0} \frac{1}{k!} A^k
    = I + tA + \frac{1}{2!} A^2 + \cdots
$$

This is the same as the definition for the matrix exponential.

The exponential map $A \mapsto e^A$ has the following properties:

* For each $A \in \mathcal L(\mathbb B)$, we have $e^A \in \mathcal L(\mathbb
  B)$ and $\| e^A \| \leq e^{\| A \|}$.
* 


### Some Calculus in Banach Space



## Semigroups and Generators

Some discussion of the abstract Cauchy problem.

A general discussion of strongly continuous semigroups and their generators.

Introduce the notion of an infinitesimal generator.

Key result: one-to-one pairing between bounded linear operators on $\ell_1(S)$
and uniformly continuous semigroups.





## Exercises

To be added.

## Solutions

To be added.

