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


# UC Markov Semigroups

## Overview

In our previous lecture we covered some of the general theory of continuous
semigroups, with a particular focus on UC semigroups.

Next we translate these results into the setting of Markov semigroups.

The main aim is to give a one-to-one correspondence between UC Markov
semigroups and "well-behaved" intensity matrices.

We will also give some brief discussion of intensity matricies that fall
outside this class, and the processes they generate.


## Notation and Terminology

Let $S$ be an arbitrary countable set.

Let $\ell_1$ be the Banach space of **summable functions** on $S$; that is, all $g \, \colon S \to \RR$ with 

$$
    \| g \| := \sum_x |g(x)| < \infty
$$

Note that $\dD$, the set of distributions on $S$, is contained in $\ell_1$.

Each Markov matrix $P$ on $S$ can and will be identifed with a linear operator
$f \mapsto fP$ on $\ell_1$ via 

$$
    (fP)(y) = \sum_x f(x) P(x, y)
    \qquad (f \in \ell_1, \; y \in S)
$$ (mmismo)

To be consistent with earlier notation, we are writing the argument of $P$ to
the left and applying $P$ to it like premultiplying with a row vector.

In the exercises you are asked to verify that {eq}`mmismo` defines
a bounded linear operator on $\ell_1$ that maps $\dD$ to itself.

For an intensity matrix $Q$ on $S$ we can try to introduce the associated
operator analogously, via

$$
    (fQ)(y) = \sum_x f(x) Q(x, y)
    \qquad (f \in \ell_1, \; y \in S)
$$ (imislo)

However, the sum in {eq}`imislo` is not always well defined.

We say that an intensity matrix $Q$ is **conservative** if {eq}`imislo`
is well defined, and it defines a bounded linear operator on $\ell_1$.

Below we give sufficient conditions that can be checked in applications.    



## A Unique Pairing

Let $Q$ be a conservative intensity matrix on $S$.

Since $Q$ is in $\linopell$, the operator exponential $e^{tQ}$ is well defined
as an element of $\linopell$ for all $t \geq 0$.

Moreover, by {proof:ref}`ecuc`, the family $(P_t)$ in $\lL(\ell_1)$ defined by
$P_t = e^{tQ}$ defines a uniformly continuous Markov semigroup on $S$.

(Here, a Markov semigroup $(P_t)$ is both a collection of Markov matrices and a
collection of operators, as in {eq}`mmismo`.)

The next theorem says that this is the only way uniformly continuous
semigroups can arise.

```{proof:theorem}
:label: usmg

If $(P_t)$ is a uniformly continuous Markov semigroup on $\ell_1$, then there
exists a conservative intensity matrix $Q$ such that $P_t = e^{tQ}$ for all $t \geq 0$.

```

```{proof:proof}
Let $(P_t)$ be a uniformly continuous Markov semigroup on $\ell_1$.

Since $(P_t)$ be a uniformly continuous semigroup on $\ell_1$, it follows from
{proof:ref}`ucsgec` that there exists a $Q \in \lL(\ell_1)$ such that 
$P_t = e^{tQ}$ for all $t \geq 0$.

We need only show that $Q$ is a conservative intensity matrix.

Because $(P_t)$ is a Markov semigroup, $P_t$ is a Markov matrix for all $t$,
and, since $P_t = e^{tQ}$ for all $t$, it follows that $Q$ is an intensity
matrix.

We proved this for the case $|S| < \infty$ in {proof:ref}`intvsmk` and
one can verify that the same arguments go through when $|S| = \infty$.

As $Q \in \lL(\ell_1)$, we know that $Q$ is a bounded operator, so $Q$ is a
conservative intensity matrix.  
```

From {proof:ref}`usmg` we can easily deduce that 

* $P_t$ is differentiable at every $t \geq 0$,
* $Q$ is the generator of $(P_t)$ and
* $P_t' = Q P_t = P_t Q$ for all $t \geq 0$.
* $P_0' = Q$

In fact these results are just a special case of the claims in {proof:ref}`ucsgec`.

The second last of these results is the Kolmogorov forward and backward equations.

The last of these results shows that we can obtain the intensity matrix $Q$ by differentiating $P_t$ at $t=0$.

```{proof:example}
Return to Poisson processes.

We know the Markov semigroup, given in {eq}`poissemi`.  

Show has an exponential representation, with appropriate $Q$. So it's UC.

Hence all of the statements above are true (derivatives in Banach sense).

Interpret $Q$.

Interpret Fokker--Planck equation?

```



### Sufficient Conditions

Our definition of a conservative intensity matrix works for the theory above
but, on the downside, it

* can be hard to check in appliations and
* lacks probabilistic intuition. 

Here we give a sufficient condition for an intensity matrix to be
conservative.


```{proof:lemma} 
:label: scintcon

Let $Q$ be an intensity matrix on $S$.  If $\sup_x |Q(x, x)|$ is finite, then
$Q$ is conservative.

```

The proof is a solved exercise.



```{proof:example}
Recall the jump chain setting where, repeating {eq}`kolbackeq`, we defined $Q$
via

$$
    Q(x, y) := \lambda(x) (K(x, y) - I(x, y))
$$ (kolbackeq_inf)

The function $\lambda \colon S \to \RR_+$ gives the jump rate at each state,
while $K$ is the Markov matrix for the embedded discrete time jump chain.

Previously we discussed this in the case where $S$ is finite but there is no
need to restrict attention to that case.

For general countable $S$, the matrix $Q$ defined in {eq}`kolbackeq_inf` is
still an intensity matrix.

If we continue to assume that $K(x,x) = 0$ for all $x$, then $Q(x,x) = -
\lambda(x)$.

Hence, the condition in {proof:ref}`scintcon` holds if and only if $\sup_x \lambda(x)$ is finite.

In other words, the condition requires that jump rate are bounded.
```

This example shows that requiring $Q$ to be conservative is a relatively mild
restriction.

Jump rates are bounded in most applications and, even when they are not,
$Q$ might still be conservative (since the condition is only sufficient).




## Beyond Conservative Intensity Matrices

If we do run into an application where an intensity matrix $Q$ is not
conservative, what might we expect?

In this scenario, we can at least hope that $Q$ is the generator of a $C_0$
semigroup.

Since $Q$ is an intensity matrix, we can be sure that this semigroup will be a
Markov semigroup.

To know when $Q$ will be the generator of a $C_0$
semigroup, we need to look to the [Hille-Yoshida
Theorem](https://en.wikipedia.org/wiki/Hille%E2%80%93Yosida_theorem) and
sufficient conditions derived from it.


While we omit a detailed treatment, it is worth noting that the issue is
linked to explosions.

To see the connection, recall that some initial value problems do not lead to a
valid solution defined for all $t \in \RR_+$.

An example is the scalar problem $x'_t = 1 + x_t^2$, which has solution $x_t =
\tan (t - c)$ for some constant $c$.

But this solution equals $+\infty$ for $t \geq c + \pi/2$.

The problem is that the time path explodes to infinity in finite time.

The same issue can occur for Markov processes, if jump rates grow sufficiently
quickly.

For more discussion, see, for example, Section 2.7 of {cite}`norris1998markov`.


## Exercises

### Exercise 1

Prove the claim in {proof:ref}`scintcon`.


## Solutions

### Solution to Exercise 1


Here is one solution.

Let $Q$ be an intensity matrix satisfying the bound in {proof:ref}`scintcon`.

Set $m := \sup_x |Q(x,x)|$ and $\hat P := I + Q / m$.

It is not hard to check that $\hat P$ is a Markov matrix and that $Q = m( \hat
P - I)$.

Since $\hat P$ is a Markov matrix, it induces a bounded linear operator on $\ell_1$ via
{eq}`mmismo`.  

As $\lL(\ell_1)$ is a linear space, we see that $Q$ is likewise in
$\lL(\ell_1)$, in which case it is conservative.





