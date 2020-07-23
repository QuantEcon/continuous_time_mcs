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


# Poisson Processes

In this lecture we examine some building blocks for continuous time Markov
chains.  

Most of our focus is on Poisson processes.

We will use the following imports

```{code-cell} ipython3
import numpy as np
import scipy as sp
import matplotlib.pyplot as plt
import quantecon as qe
from numba import njit
```



## Overview


Poisson processes are a kind of **counting process**, in that they count the
number of events occurring by a given time.

Counting processes become Poisson processes when the time interval between events
is IID and exponentially distributed.

The next figure shows one realization of a Poisson process $(N_t)$.


```{code-cell} ipython3
:tags: [hide-input]

T = 5
Ws = np.random.exponential(size=T)
Js = np.cumsum(Ws)
Ys = np.arange(T)

fig, ax = plt.subplots()

ax.plot(np.insert(Js, 0, 0)[:-1], Ys, 'o')
ax.hlines(Ys, np.insert(Js, 0, 0)[:-1], Js, label='$N_t$')
ax.vlines(Js[:-1], Ys[:-1], Ys[1:], alpha=0.25)

ax.set(xticks=Js[:-1],
       xticklabels=[f'$J_{k}$' for k in range(1, T+1)],
       yticks=(0, 1, 2, 3),
       xlabel='$t$')

ax.legend(loc='lower right')
plt.show()
```

Exponential distributions and Poisson processes have deep connections to
continuous Markov chains.

For example, Poisson processes are perhaps the simplest nontrivial example of
a continuous time Markov chain.

In addition, when continuous time Markov chains jump between states, the time
between jumps is *necessarily* exponentially distributed.

This is due to the fact that Markov chains are, by definition, forgetful.

In particular, for a Markov chain, the distribution over future outcomes
depends only on the current state of the chain.

This requires that the amount of time since the last jump is not helpful in
predicting the timing of the next jump.

In other words, the jump times are "memoryless".

It is remarkable that the only distribution on $\mathbb R_+$ with this
property is the exponential distribution.

The discussion below tries to clarify these ideas.


## Memoryless Distributions

Some distributions are forgetful.

For example, suppose you are betting on a roulette wheel.

Red has come up four times in a row.

Since five reds in a row is an unlikely event, many people instinctively feel
that black is more likely in the fifth spin.

("Surely black will come up this time!")

But rational thought tells you this is wrong: the four previous reds make no
difference to the outcome of the next spin.

(We are assuming that the wheel is fairly balanced.)

A more mathematical restatement of this phenomenon is: the geometric distribution is memoryless.

This restatement will be clarified below.

### The Geometric Distribution

A random variable $X$ is said to be **geometrically distributed** if it is
supported on the nonnegative integers and, for some $\theta \in [0, 1]$,

$$ 
    \mathbb P\{X = k\} = (1-\theta)^k \theta 
    \qquad (k = 0, 1, \ldots)
$$ (geodist)

An example can be constructed from the discussion of the roulette wheel above.

Suppose that, 

* the outcome of each spin is either red or black, 
* on each spin, black occurs with probability $\theta$ and
* outcomes across spins are independent.

The expression in {eq}`geodist` is the probability that the first occurrence of
black is at spin $k$, when the first spin is labeled $0$.

(The outcome "black" fails $k$ times and then succeeds.)

Consistent with our discussion in the introduction, the geometric distribution
is memoryless.

For example, given any nonnegative integers $m, n$, we have

$$
    \mathbb P \{X = m + n \,|\, X \geq m \} = \mathbb P \{X = n\}
$$ (memgeo)

To show this, we note that the left hand side is

$$
    \frac{ \mathbb P \{X = m + n \text{ and } X \geq m \} }
    {\mathbb P \{X \geq m\}}
    =
    \frac{ \mathbb P \{X = m + n \} }
    {\mathbb P \{X \geq m\}}
    = \frac{ (1-\theta)^{m+n} \theta }
        {\sum_{k \geq m} (1-\theta)^k \theta }
$$

Simple manipulations complete the proof of {eq}`memgeo`.



### From Geometric to Exponential

Continuous time Markov chains jump between discrete states.

To construct them, we need to specify the distribution of the **holding
times**, which are the time intervals between jumps.

The holding time distribution must be memoryless, so that the chain satisfies
the Markov property (we return to this point later).

While the geometric distribution is memoryless, its discrete support makes it
less than ideal for the continuous time case.

Hence we turn to the **exponential distribution**, which is supported on $\mathbb R_+$.

If $Y$ is exponential with rate $\lambda$, then 

$$
    \mathbb P\{Y > y\} = e^{-\lambda y}
    \quad \text{  for all } 
    y \geq 0
$$

The exponential distribution can be regarded as the "limit" of the geometric
distribution, as we now argue informally.

Suppose that 

* customers enter a shop at discrete times $t_1, t_2, \ldots$,
* these times are evenly spaced, with $h = t_{i+1} - t_i$ for all $i$,
* at each of these times, either one or zero customers enter (because $h$ is small),
* entry occurs with probability $\lambda h$ and is independent over time.

Let 

* $Y$ be the time of the first arrival, 
* $t$ be a given positive number and
* $i(h)$ be the largest integer such that $i(h) h \leq t$.

Note that, as $h \to 0$, we will have $i(h) h  \to t$.

Writing $i(h)$ as $i$ and using the geometric distribution, the probability that 
the first arrival falls after $t_{i}$ is $(1-\lambda h)^{i}$.

Hence 

$$
    \mathbb P\{Y > t_{i} \}
    = (1-\lambda h)^i
    = \left( 1- \frac{\lambda i h}{i} \right)^i
$$

Using the fact that $e^x = \lim_{i \to \infty}(1 + x/i)^i$ for all $x$ and $i
h = t_i \to t$, we obtain, for large $i$,

$$
    \mathbb P\{Y > t_{i} \}
    \approx
    e^{- \lambda t}
$$

and the right hand side is the exponential distribution with rate $\lambda$.



### Memoryless Property of the Exponential Distribution

Show that exponential is the only memoryless distribution on $\mathbb R_+$.


### Uniqueness



## Poisson Dynamics

[roadmap]

### Construction

Let $\lambda > 0$ be given and let $\{W_i\}$ be IID exponential with rate $\lambda$.

Let

$$
    J_k := W_1 + \cdots W_k 
    \quad \text{with} \quad
    J_0 = 0
$$

For example, imagine a queue of infinite length, with customer 1 at the front,
customer 2 next, etc.

Let $W_i$ is the amount of time that customer $i$ waits in the
queue. 

Then $J_k$ is the time that the $k$-th customer is served, while

$$
    N_t := \sum_{k \geq 0} k \mathbb 1\{ J_k \leq t < J_{k+1} \}
$$

is the number of customers served by time $t$.

The next figure illustrate the definition of $N_t$ for a given jump sequence $\{J_k\}$.

```{code-cell} ipython3
:tags: [hide-input]

Ks = 0, 1, 2, 3
Js = 0, 0.8, 1.8, 2.1, 3
n = len(Ks)

fig, ax = plt.subplots()

ax.plot(Js[:-1], Ks, 'o')
ax.hlines(Ks, Js[:-1], Js[1:], label='$N_t$')
ax.vlines(Js[:-1], (0, Ks[0], Ks[1], Ks[2]), Ks, alpha=0.25)

ax.set(xticks=Js[:-1],
       xticklabels=[f'$J_{k}$' for k in range(n)],
       yticks=(0, 1, 2, 3),
       xlabel='$t$')

ax.legend(loc='lower right')
plt.show()
```

An alternative but equivalent definition is

$$
    N_t = \max \{k \geq 0 \,|\, J_k \leq t \}
$$

As a function of $t$, the process $N_t$ is called a **counting process**.



### Properties

**Proposition**  For each $t > 0$, the random variable $N_t$ has the Poisson
distribution with parameter $t \lambda$, so that

$$ 
    \mathbb P\{N_t =k\} 
    = e^{-t \lambda} \frac{(t \lambda)^k }{k!}
    \qquad (k = 0, 1, \ldots)
$$

[stationary, independent increments]

[For a proof, see Norris Thm. 2.4.3.]

An exercise at the end of the lecture asks you to test the claim that $N(t)$ is Poisson-$(t \lambda )$ (informally) via simulation.



## Uniqueness

What other processes have properties xyz listed above?

The answer is none: any process with these properties is necessarily a Poisson
process.

[Give more discussion, add ref.]




## Exercises

Exercise 1
----------

Fix $\lambda > 0$ and draw $\{W_i\}$ as IID exponentials with rate $\lambda$

Set $J_n := W_1 + \cdots W_n$ with $J_0 = 0$ and
    $N_t := \sum_{n \geq 0} n \mathbb 1\{ J_n \leq t < J_{n+1} \}$

Provide a visual test of the claim that $N_t$ is Poisson with parameter $t
\lambda$.

Do this by fixing $t = T$, generating many independent draws of $N_T$ and
comparing the empirical distribution of the sample with a Poisson
distribution with rate $T \lambda$.

Try first with $\lambda = 0.5$ and $T=10$.




## Solutions

Exercise 1
----------

Here is one solution.  

The figure shows that the fit is already good with a modest sample size.

Increasing the sample size will further improve the fit.


```{code-cell} ipython3
λ = 0.5
T = 10

def poisson(k):
    "Poisson pmf with rate Tλ."
    r = T * λ
    return np.exp(-r) * (r**k) / sp.special.factorial(k)

@njit
def draw_Nt(max_iter=1e5):
    J = 0
    n = 0
    while n < max_iter:
        W = np.random.exponential(scale=1/λ)
        J += W
        if J > T:
            return n
        n += 1

@njit
def draw_Nt_sample(num_draws):
    draws = np.empty(num_draws)
    for i in range(num_draws):
        draws[i] = draw_Nt()
    return draws


sample_size = 10_000
sample = draw_Nt_sample(sample_size)
max_val = sample.max()
vals = np.arange(0, max_val+1)

fig, ax = plt.subplots()

ax.plot(vals, [poisson(v) for v in vals], 
    marker='o', label='poisson')
ax.plot(vals, [np.mean(sample==v) for v in vals], 
    marker='o', label='empirical')

ax.legend(fontsize=12)
plt.show()

```

