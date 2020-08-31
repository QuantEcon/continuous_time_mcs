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


## UC Markov Semigroups

Let's translate these results into the setting of Markov semigroups


### Notation and Terminology

Let $S$ be an arbitrary countable set.

Let $\ell_1$ be the Banach space of **summable functions** on $S$; that is, all $g \, \colon S \to \RR$ with 

$$
    \| g \| := \sum_x |g(x)| < \infty
$$

Note that $\dD$, the set of distributions on $S$, is contained in $\ell_1$.

Each Markov matrix $P$ on $S$ can be identifed with a linear operator $f \mapsto fP$ on $\ell_1$ via 

$$
    (y)(fP) = \sum_x f(x) P(x, y)
    \qquad (f \in \ell_1, \; y \in S)
$$ (mmismo)

To be consistent with earlier notation, we are writing the argument of $P$ to
the left and treating it as a row vector.

In essence, we are extending $P$ from $\dD$ to all of $\ell_1$.

In the exercises you are asked to verify that {eq}`mmismo` defines
a bounded linear operator on $\ell_1$ that maps $\dD$ to itself.

For an intensity matrix $Q$ on $S$ we can try to introduce the associated
operator analogously, via

$$
    (y)(fQ) = \sum_x f(x) Q(x, y)
    \qquad (f \in \ell_1, \; y \in S)
$$ (imislo)

We say that an intensity matrix $Q$ is **conservative** if {eq}`imislo`
defines a bounded linear operator on $\ell_1$.

Below we give sufficient conditions that can be checked in applications.    



### A Unique Pairing

Let $Q$ be a conservative intensity matrix on $S$.

Since $Q$ is in $\linopell$, the operator exponential $e^{tQ}$ is well defined
as an element of $\linopell$ for all $t \geq 0$.

Moreover, $(P_t)$ defined by $P_t = e^{tQ}$ defines a uniformly continuous
Markov semigroup on $S$.

[proof]

```{proof:theorem}
:label: usmg

If $(P_t)$ is a uniformly continuous Markov semigroup, then there
exists a conservative intensity matrix $Q$ such that $P_t = e^{tQ}$ for all $t
\geq 0$.
```



### Sufficient Conditions

Bounded jump intensities imply a conservative intensity matrix.

Once we restrict attention to 




### Beyond Conservative Intensity Matrices

Note that, for the unbounded case, the situation is trickier.

* We have to look to the Hille-Yoshida theorem to pin down valid generators of
  Markov semigroups.
* The exponential representation is not valid.
* The KFE/KBE can have multiple solutions.

Explosions.

We define $(X_t)$ as 

$$
    X_t = \sum_{k \geq 0} Y_k \mathbb 1\{J_k \leq t < J_{k+1}\}
    \qquad (t \geq 0)
$$ 

This construction assumes that $J_k \to \infty$ with probability one, so that $X_t$ is well defined for all $t \geq 0$.

[What does this require?  What might happen if it fails?]




