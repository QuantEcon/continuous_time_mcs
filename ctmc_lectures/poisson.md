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
import matplotlib.pyplot as plt
import quantecon as qe
from numba import njit
from scipy.special import factorial, binom
```



## Overview


Poisson processes are a kind of **counting process**, in that they count the
number of "arrivals" occurring by a given time.

(Examples: the number of visitors to a website, the number of customers arriving at a restaurant.)

Counting processes become Poisson processes when the time interval between
arrivals is IID and exponentially distributed.

The next figure shows one realization of a Poisson process $(N_t)$, with jumps
at each new arrival.


```{code-cell} ipython3
:tags: [hide-input]

np.random.seed(1234)
T = 5
Ws = np.random.exponential(size=T)
Js = np.cumsum(Ws)
Ys = np.arange(T)

fig, ax = plt.subplots()

ax.plot(np.insert(Js, 0, 0)[:-1], Ys, 'o')
ax.hlines(Ys, np.insert(Js, 0, 0)[:-1], Js, label='$N_t$')
ax.vlines(Js[:-1], Ys[:-1], Ys[1:], alpha=0.25)

ax.set(xticks=[],
       yticks=range(Ys.max()+1),
       xlabel='time')

ax.grid(lw=0.2)
ax.legend(loc='lower right')
plt.show()
```

Exponential distributions and Poisson processes have deep connections to
continuous time Markov chains.

For example, Poisson processes are one of the simplest nontrivial examples of
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

(Similarly, the only memoryless distribution on $\mathbb Z_+$ is the geometric
distribution.)

The discussion below tries to clarify these ideas.


## Memoryless Distributions

Consider betting on a roulette wheel and suppose that red has come up four times in a row.

Since five reds in a row is an unlikely event, many people instinctively feel
that black is more likely on the fifth spin.

("Surely black will come up this time!")

But rational thought tells us this is wrong: the four previous reds make no
difference to the outcome of the next spin.

(We are assuming that the wheel is fairly balanced.)

A more mathematical restatement of this phenomenon is: the geometric distribution is memoryless.

This restatement will be clarified below.

### The Geometric Distribution

A random variable $X$ is said to be [geometrically distributed](https://en.wikipedia.org/wiki/Geometric_distribution) if it is
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

For example, given any nonnegative integer $m$, we have

$$
    \mathbb P \{X = m + 1 \,|\, X > m \} = \mathbb P \{X = 0\}
$$ (memgeo)

To show this, we note that the left hand side is

$$
    \frac{ \mathbb P \{X = m + 1 \text{ and } X > m \} }
    {\mathbb P \{X \geq m\}}
    =
    \frac{ \mathbb P \{X = m + 1 \} }
    {\mathbb P \{X > m\}}
    = \frac{ (1-\theta)^{m+1} \theta }
        {\sum_{k > m} (1-\theta)^k \theta }
$$

The right hand side simplifies to $\theta$, completing the proof of {eq}`memgeo`.



### From Geometric to Exponential

Continuous time Markov chains jump between discrete states.

To construct them, we need to specify the distribution of the **holding
times** (also called **wait times**), which are the time intervals between jumps.

The holding time distribution must be memoryless, so that the chain satisfies
the Markov property (we return to this point later).

While the geometric distribution is memoryless, its discrete support makes it
less than ideal for the continuous time case.

Hence we turn to the [exponential distribution](https://en.wikipedia.org/wiki/Exponential_distribution), which is supported on $\mathbb R_+$.

If $Y$ is exponential with rate $\lambda$, then 

$$
    \mathbb P\{Y > y\} = e^{-\lambda y}
    \quad \text{  for all } 
    y \geq 0
$$

The exponential distribution can be regarded as the "limit" of the geometric
distribution, as we now argue informally.

Suppose that 

* customers enter a shop at discrete times $t_1, t_2, \ldots$
* these times are evenly spaced, with $h = t_{i+1} - t_i$ for all $i$
* at each $t_i$, either zero or one customers enter (less than 2 because $h$ is small) 
* entry at each $t_i$ occurs with probability $\lambda h$ and is independent over $i$.

Let 

* $Y$ be the time of the first arrival at the shop, 
* $t$ be a given positive number and
* $i(h)$ be the largest integer such that $t_{i(h)} \leq t$.

Note that, as $h \to 0$, the grid becomes finer and $t_{i(h)} = i(h) h  \to t$.

Writing $i(h)$ as $i$ and using the geometric distribution, the probability that 
the first arrival occurs after $t_{i}$ is $(1-\lambda h)^{i}$.

Hence 

$$
    \mathbb P\{Y > t_{i} \}
    = (1-\lambda h)^i
    = \left( 1- \frac{\lambda i h}{i} \right)^i
$$

Using the fact that $e^x = \lim_{i \to \infty}(1 + x/i)^i$ for all $x$ and $i
h = t_i \to t$, we obtain, for large $i$,

$$
    \mathbb P\{Y > t\}
    \approx
    e^{- \lambda t}
$$

In this sense, the exponential is the limit of the geometric distribution.


### Memoryless Property of the Exponential Distribution

The exponential distribution is the only memoryless distribution supported on $\mathbb R_+$.

More specifically, a random variable $X$ supported on $\mathbb R_+$ has 
the exponential distribution with some rate $\lambda > 0$ if and only if,
for all positive $s, t$,

$$
    \mathbb P \{X > s + t \,|\, X > s \} = \mathbb P \{X > t\}
$$ (memexpo)

To see that {eq}`memexpo` holds when $X$ is exponential with rate $\lambda$,
observe that

$$
    \frac{ \mathbb P \{X > s + t \text{ and } X > s \} }
    {\mathbb P \{X > s\}}
    =
    \frac{ \mathbb P \{X > s + t \} }
    {\mathbb P \{X > s\}}
    = \frac{e^{-\lambda s - \lambda t}}{e^{-\lambda s}}
    = e^{-\lambda t}
$$

#### Uniqueness

Let's look at the claim that memorylessness implies the exponential distribution.

The proof is a bit longer but not overly difficult.

Let $X$ be a random variable supported on $\mathbb R_+$ such that
{eq}`memexpo` holds.

The "exceedance" function $f(s) := \mathbb P\{X > s\}$ then has three properties:

1. $f$ is decreasing on $\mathbb R_+$,
1. $0 < f(t) < 1$ for all $t > 0$,
1. $f(s + t) = f(s) f(t)$ for all $s, t > 0$.

The first property is common to all exceedance functions, the second is due to
the fact that $X$ is supported on all of $\mathbb R_+$, and the
third is {eq}`memexpo`.

From these three properties we will show that

$$
    f(t) = f(1)^t  \;\; \forall \, t \geq 0
$$ (implex)

This is sufficient to prove the claim because $\lambda := - \ln f(1)$ is a positive real number (by property 2) and, moreover,

$$ 
    f(t) 
    = \exp( \ln ( f(1) ) t) 
    = \exp( - \lambda t) 
$$

To see that {eq}`implex` holds, fix positive integers $m,n$.

We can use property 3 to obtain both

$$
    f(m/n) = f(1/n)^m
    \quad \text{and} \quad
    f(1) = f(1/n)^n
$$

It follows that $f(m/n)^n = f(1/n)^{m n} = f(1)^m$ and, raising to the power
of $1/n$, we get {eq}`implex` when $t=m/n$.

The discussion so far confirms that {eq}`implex` holds when $t$ is rational.

So now take any $t \geq 0$ and rational sequences $(a_n)$ and $(b_n)$
converging to $t$ with $a_n \leq t \leq b_n$ for all $n$.

By property 1 we have $f(a_n) \leq f(t) \leq f(b_n)$ for all $n$, so

$$
    f(1)^{a_n} \leq f(t) \leq f(1)^{b_n}
    \quad \forall \, n \in \mathbb N
$$

Taking the limit in $n$ completes the proof.



## Sums of Exponentials

A random variable $W$ on $\mathbb R_+$ is said to have the [Erlang
distribution](https://en.wikipedia.org/wiki/Erlang_distribution) if its
density has the form

$$ 
    f(t) = \frac{\lambda^n  t^{n-1}}{(n-1)!} e^{-\lambda t}
    \qquad (t \geq 0)
$$

for some $n \in \mathbb N$ and $\lambda > 0$.

The parameters $n$ and $\lambda$ are called the **shape** and **rate**
parameters respectively.

The next figure shows the shape for two parameterizations.


```{code-cell} ipython3
:tags: [hide-input]

t_grid = np.linspace(0, 50, 100)

class Erlang:

    def __init__(self, λ=0.5, n=10):
        self.λ, self.n = λ, n

    def __call__(self, t):
        n, λ = self.n, self.λ
        return (λ**n * t**(n-1) * np.exp(-λ * t)) / factorial(n-1)

e1 = Erlang(n=10, λ=0.5)
e2 = Erlang(n=10, λ=0.75)

fig, ax = plt.subplots()
for e in e1, e2:
    ax.plot(t_grid, e(t_grid), label=f'$n={e.n}, \lambda={e.λ}$')

ax.legend()
plt.show()

```

The CDF of the Erlang distribution is

$$
    F(t) 
    = \mathbb P\{W \leq t\}
    = 1 - \sum_{k=0}^{n-1} \frac{(\lambda t)^k}{k!} e^{-\lambda t}
$$ (erlcdf)

The Erlang distribution is of interest to us because of the following fact.

If, for some $\lambda > 0$, the sequence $(W_i)$ is IID and exponentially
distributed with rate $\lambda$, then $J_n := \sum_{i=1}^n W_i$ has the Erlang
distribution with shape $n$ and rate $\lambda$.

We will see how this connects to the Poisson process just below.



## Poisson Dynamics

Next we turn to Poisson processes, which are a form of counting process.

### Counting Processes

Let $(J_k)$ be an increasing sequence of nonnegative random variables
satisfying  $J_k \to \infty$ with probability one.

For example, $J_k$ might be the time the $k$-th customer arrives at a shop.

Then 

$$
    N_t := \sum_{k \geq 0} k \mathbb{1} \{ J_k \leq t < J_{k+1} \}
$$ (defcount)

is the number of customers that have visited by time $t$.



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


### Exponential Holding Times

A Poisson process is a counting process with independent exponential holding times.

In particular, suppose that the arrival times are given by $J_0 = 0$ and 

$$
    J_k := W_1 + \cdots W_k 
$$

where $(W_i)$ are IID exponential with some fixed rate $\lambda$.

Then the associated counting process $(N_t)$ is called a **Poisson process**.

The rationale behind the name is that, for each $t > 0$, the random variable
$N_t$ has the Poisson distribution with parameter $t \lambda$.

In other words, 

$$ 
    \mathbb P\{N_t = k\} 
    = e^{-t \lambda} \frac{(t \lambda)^k }{k!}
    \qquad (k = 0, 1, \ldots)
$$ (poissondist)

For example, since $N_t = 0$ if and only if $W_1 > t$, we have

$$ 
    \mathbb P\{N_t =0\} 
    = \mathbb P\{W_1 > t\}
    = e^{-t \lambda}
$$

and the right hand side agrees with {eq}`poissondist` when $k=0$.

This sets up a proof by induction, which is time consuming but not difficult
--- the details can be found in $\S29$ of {cite}`howard2017elements`.

Another way to show that $N_t$ is Poisson with rate $t \lambda$ is to observe
that

$$ 
    \mathbb P\{N_t \leq n\} 
    = \mathbb P\{J_{n+1} > t\} 
    = 1 - \mathbb P\{J_{n+1} \leq t\}
$$

Inserting the expression for the Erlang CDF in {eq}`erlcdf` with shape $n+1$ and
rate $\lambda$, we obtain 

$$ 
    \mathbb P\{N_t \leq n\} 
    = \sum_{k=0}^{n} \frac{(\lambda t)^k}{k!} e^{-\lambda t}
$$

This is the (integer valued) CDF for the Poisson distribution with rate
$t \lambda$.

An exercise at the end of the lecture asks you to verify that $N(t)$ is Poisson-$(t \lambda )$ informally via simulation.


### Properties

One of the defining features of a Poisson process is that it has stationary
and independent increments.

This is due to the memoryless property of exponentials.

It means in particular that

1. the variables $\{N_{t_{i+1}} - N_{t_i}\}_{i \in I}$ are independent for any
   strictly increasing finite sequence $(t_i)_{i \in I}$ and
2. the distribution of $N_{t+h} - N_t$ depends on $h$ but not $t$.


A detailed proof can be found in Theorem 2.4.3 of {cite}`norris1998markov`.

Instead of repeating this, we provide some intuition from a discrete
approximation.

In the discussion below, we use the following well known fact:  If
$(\theta_n)$ is a sequence such that $n \theta_n$ converges, then

$$
    \text{Binomial}(n, \theta_n) 
    \approx
    \text{Poisson}(n \theta_n)
    \quad \text{for large } n
$$ (binpois)

(The exercises ask you to examine this claim visually.)

We now return to the environment where we linked the geometric distribution to
the exponential.

That is, we fix small $h > 0$ and let $t_i := ih$ for all $i$.

Let $(V_i)$ be IID binary random variables with $\mathbb P\{V_i = 1\} =
\lambda h$ for some $\lambda > 0$.

Linking to our previous discussion, 

* $V_i = 1$ means that a customer visits at time $t_i$.
* Visits occur with probability $\lambda h$, which is proportional to the
  length of the interval between grid points.

We learned above that the holding time (wait time) until the first visit is approximately
exponential with rate $t \lambda$.

Since $(V_i)$ is IID, the same is true for the second wait time and so on.

Moreover, these wait times are independent, since they depend on separate
subsets of $(V_i)$.

Let $\hat N_t$ count the number of visits by time $t$, as shown in the next figure.

($V_i = 1$ is indicated by a vertical line at $t_i = i h$.)

```{code-cell} ipython3
:tags: [hide-input]

fig, ax = plt.subplots()
np.random.seed(1)
T = 10
p = 0.25
B = np.random.uniform(size=T) < p
N = np.cumsum(B)
m = N[-1]  # max of N

t_grid = np.arange(T)
t_ticks = [f'$t_{i}$' for i in t_grid]
ax.set_yticks(range(m+1))
ax.set_xticks(t_grid)
ax.set_xticklabels(t_ticks, fontsize=12)

ax.step(t_grid, np.insert(N, 0, 0)[:-1], label='$\hat N_t$')

for i in t_grid:
    if B[i]:
        ax.vlines((i,), (0,), (m,), ls='--', lw=0.5)

ax.legend(loc='center right')
plt.show()
```

We expect from the discussion above that $(\hat N_t)$ approximates a Poisson process.

This intuition is correct because, fixing $t$, letting $k := \max\{i \in
\mathbb N \,:\, t_i \leq t\}$ and applying {eq}`binpois`, we have

$$
    \hat N_t 
    = \sum_{i=1}^k V_i
    \sim \text{Binomial}(k, \lambda h)
    \approx
    \text{Poisson}(k \lambda h)
$$

Using the fact that $kh = t_k \approx t$, we see
that $\hat N_t$ is approximately Poisson with rate $t \lambda$, just as we
expected.


This approximate construction of a Poisson process helps illustrate the
property of stationary independent increments.

For example, if we fix $s < t$, then $\hat N_t - \hat N_s$ is the number of visits
between $s$ and $t$, so that 

$$
    \hat N_t - \hat N_s
    = \sum_i V_i \mathbb 1\{ s < t_i < t \}
$$

Suppose there are $k$ grid points between $s$ and $t$, so that $t-s \approx
kh$.

Then

$$
    \hat N_t - \hat N_s
    \sim \text{Binomial}(k, \lambda h)
    \approx 
    \text{Poisson}(k \lambda h)
    \approx 
    \text{Poisson}((t -s) \lambda)
$$

This illustrates the idea that, for a Poisson process $(N_t)$, we have

$$
   N_t - N_s \sim N_{t-s} \sim  
    \text{Poisson}((t -s) \lambda)
$$

In particular, increments are stationary.

The approximation also illustrates indepenence of increments, since, in the
approximation, increments depend on separate subsets of $(V_i)$.


## Uniqueness

What other counting processes have stationary independent increments?

Remarkably, the answer is none: any counting process with these properties is
necessarily a Poisson process.

The proof is similar to our earlier proof that the exponential distribution is
the only memoryless distribution.

Details can be found in Section 6.2 of {cite}`pardoux2008markov` or 
Theorem 2.4.3 of {cite}`norris1998markov`.


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

Exercise 2
----------


In the we used the fact that

$$
    \text{Binomial}(n, \theta) 
    \approx
    \text{Poisson}(n \theta)
$$

when $n$ is large and $\theta$ is small.

Check this informally by plotting the distributions side by side.

Experiment with different values of $n$ and $\theta$.


## Solutions

Exercise 1
----------

Here is one solution.  

The figure shows that the fit is already good with a modest sample size.

Increasing the sample size will further improve the fit.


```{code-cell} ipython3
λ = 0.5
T = 10

def poisson(k, r):
    "Poisson pmf with rate r."
    return np.exp(-r) * (r**k) / factorial(k)

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

ax.plot(vals, [poisson(v, T * λ) for v in vals], 
    marker='o', label='poisson')
ax.plot(vals, [np.mean(sample==v) for v in vals], 
    marker='o', label='empirical')

ax.legend(fontsize=12)
plt.show()
```


Exercise 2
----------

Here is one solution.  It shows that the approximation is good when $n$ is
large and $\theta$ is small.

```{code-cell} ipython3
def binomial(k, n, p):
    # Binomial(n, p) pmf evaluated at k
    return binom(n, k) * p**k * (1-p)**(n-k)

θ_vals = 0.5, 0.2, 0.1

n_vals = 50, 75, 100

fig, axes = plt.subplots(len(n_vals), 1, figsize=(6, 12))

for n, θ, ax in zip(n_vals, θ_vals, axes.flatten()):

    k_grid = np.arange(n)
    binom_vals = [binomial(k, n, θ) for k in k_grid]
    poisson_vals = [poisson(k, n * θ) for k in k_grid]
    ax.plot(k_grid, binom_vals, 'o-', alpha=0.5, label='binomial')
    ax.plot(k_grid, poisson_vals, 'o-', alpha=0.5, label='Poisson')
    ax.set_title(f'$n={n}$ and $\\theta = {θ}$')
    ax.legend(fontsize=12)

fig.tight_layout()
plt.show()
```



# References

```{bibliography} references.bib
```
