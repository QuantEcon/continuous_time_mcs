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



## Markov Dynamics

Let's start by thinking about how to represent continuous time Markov chains
and how to visualize them.


### Informal Definition

Let $S = \{x_1, \ldots, x_n\}$, where each $x_i$ is a real number.

Informally, a continuous time $S$-valued Markov chain $\{X_t\}$ is an $S$-valued stochastic process indexed by $t \in \mathbb R_+$ that has the Markov property.

Having the Markov property means that $\{X_t\}_{t < r}$ and $\{X_t\}_{t \geq r}$ are independent given $X_r$.

Because the state space is discrete, all movements between states takes the
form of jumps.

We use $J_0, J_1, J_2, \ldots$ to record the jump times, with $J_0 := 0$.

The process is constant between jumps. 

Here is a visualization with $S = \{1, 2, 3\}$.

```{code-cell} ipython3
XJs = 1, 3, 2, 1
Js = 0, 0.3, 1.5, 2.1
n = len(Js)

fig, ax = plt.subplots()

ax.plot(Js, XJs, 'o')
ax.hlines(XJs, Js[:-1], Js[1:], label='$X_t$')
ax.vlines(Js, (0, XJs[0], XJs[1], XJs[2]), XJs, alpha=0.25)

ax.set(xticks=Js,
       xticklabels=[f'$J_{k}$' for k in range(n)],
       yticks=(0, 1, 2, 3, 4),
       xlabel='$t$')

ax.legend()
plt.show()

```



### The Jump Chain Representation

There is a standard way to represent the process $\{X_t\}$ that is convenient for
computation.

Let $\{Y_k\}$ with $k=0, 1, \ldots$ record the sequence of distinct values
for the chain.

(That is, $Y_k = X_{J_k}$ for $k=0, 1, \ldots$)

Then 

$$
    X_t = Y_{N_t}
    \quad \text{where} \quad
    N_t := \sum_{k \geq 0} k \mathbb 1\{J_k \leq t < J_{k+1} \}
$$ (xfromy)

In particular, we can reconstruct $\{X_t\}$ from the **jump chain sequence** $(J_k, Y_k)$ via {eq}(xfromy).

We can also plot it easily using Matplotlib.

Here's a simulation that illustrates with 

* steps between jumps drawn from an exponential distribution and
* the sequence $\{Y_k\}$ drawn from a discrete time Markov chain.

```{code-cell} ipython3
n = 100

# Generate J sequence randomly using exponential step sizes
J = np.zeros(n)
T = np.random.exponential(size=n-1)
J[1:] = np.cumsum(T)

# Generate Y sequence from discrete approximation of an AR(1)
mc = qe.tauchen(0.5, 0.5, n=10)  
Y = mc.simulate(n)

fig, ax = plt.subplots()
ax.step(J, Y, label="$X_t$")

ax.set(xlabel="time", ylabel="state")
ax.legend()
plt.show()

```





## Implications of the Markov Property

Below we will find out that this particular simulation is very representative.

It's a remarkable fact that *every* continuous time Markov chain on $S$ can be
constructed as follows:

1. Set $J_0 = 0$ and then $J_{k+1} = J_k + \tau_{k+1}$ where each $\tau_i$ is an independent exponential draw.
1. Draw $\{Y_k \}$ from a discrete time Markov chain on $S$.
1. Take $(J_k, Y_k)$ as the jump chain sequence and build $X_t$ as above.

Below, we call this the **jump chain construction**.



