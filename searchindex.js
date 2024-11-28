Search.setIndex({"docnames": ["ergodicity", "generators", "intro", "kolmogorov_bwd", "kolmogorov_fwd", "markov_prop", "memoryless", "poisson", "uc_mc_semigroups", "zreferences"], "filenames": ["ergodicity.md", "generators.md", "intro.md", "kolmogorov_bwd.md", "kolmogorov_fwd.md", "markov_prop.md", "memoryless.md", "poisson.md", "uc_mc_semigroups.md", "zreferences.md"], "titles": ["<span class=\"section-number\">8. </span>Stationarity and Ergodicity", "<span class=\"section-number\">6. </span>Semigroups and Generators", "Continuous Time Markov Chains", "<span class=\"section-number\">4. </span>The Kolmogorov Backward Equation", "<span class=\"section-number\">5. </span>The Kolmogorov Forward Equation", "<span class=\"section-number\">3. </span>The Markov Property", "<span class=\"section-number\">1. </span>Memoryless Distributions", "<span class=\"section-number\">2. </span>Poisson Processes", "<span class=\"section-number\">7. </span>UC Markov Semigroups", "<span class=\"section-number\">9. </span>Bibliography"], "terms": {"In": [0, 1, 3, 4, 5, 6, 7, 8], "addit": [0, 1, 3, 4, 5, 6, 7, 8], "what": [0, 1, 3, 4, 5, 6, 7, 8], "s": [0, 1, 4, 5, 6, 7, 8], "anaconda": [0, 3, 4, 5, 6, 7], "thi": [0, 1, 3, 4, 5, 6, 7, 8], "lectur": [0, 1, 2, 3, 4, 5, 6, 7, 8], "need": [0, 1, 3, 4, 5, 6, 7, 8], "follow": [0, 1, 3, 4, 5, 6, 7, 8], "librari": [0, 3, 4, 5, 6, 7], "pip": [0, 3, 4, 5, 6, 7], "instal": [0, 3, 4, 5, 6, 7], "quantecon": [0, 2, 3, 4, 5, 6, 7], "requir": [0, 1, 3, 4, 5, 6, 7, 8], "alreadi": [0, 3, 4, 5, 6, 7], "satisfi": [0, 1, 3, 4, 5, 6, 7, 8], "home": [0, 3, 4, 5, 6, 7], "runner": [0, 3, 4, 5, 6, 7], "miniconda3": [0, 3, 4, 5, 6, 7], "env": [0, 3, 4, 5, 6, 7], "lib": [0, 3, 4, 5, 6, 7], "python3": [0, 3, 4, 5, 6, 7], "12": [0, 3, 4, 5, 6, 7], "site": [0, 3, 4, 5, 6, 7], "packag": [0, 3, 4, 5, 6, 7], "0": [0, 1, 3, 4, 5, 6, 7, 8], "7": [0, 1, 3, 4, 5, 6, 7], "numba": [0, 2, 3, 4, 5, 6, 7], "49": [0, 3, 4, 5, 6, 7], "60": [0, 3, 4, 5, 6, 7], "numpi": [0, 3, 4, 5, 6, 7], "17": [0, 3, 4, 5, 6, 7], "26": [0, 3, 4, 5, 6, 7], "4": [0, 1, 4, 6, 7], "request": [0, 3, 4, 5, 6, 7], "32": [0, 3, 4, 5, 6, 7], "scipi": [0, 3, 4, 5, 6, 7], "5": [0, 1, 3, 5, 6, 7], "13": [0, 3, 4, 5, 6, 7], "sympi": [0, 3, 4, 5, 6, 7], "llvmlite": [0, 3, 4, 5, 6, 7], "44": [0, 3, 4, 5, 6, 7], "43": [0, 3, 4, 5, 6, 7], "0dev0": [0, 3, 4, 5, 6, 7], "charset": [0, 3, 4, 5, 6, 7], "normal": [0, 3, 4, 5, 6, 7], "idna": [0, 3, 4, 5, 6, 7], "urllib3": [0, 3, 4, 5, 6, 7], "21": [0, 3, 4, 5, 6, 7], "certifi": [0, 3, 4, 5, 6, 7], "2017": [0, 3, 4, 5, 6, 7, 9], "2024": [0, 3, 4, 5, 6, 7], "30": [0, 3, 4, 5, 6, 7], "mpmath": [0, 3, 4, 5, 6, 7], "we": [0, 1, 3, 4, 5, 6, 7, 8], "discuss": [0, 1, 3, 4, 5, 6, 7, 8], "equilibrium": 0, "behavior": 0, "continu": [0, 3, 6, 7, 8, 9], "time": [0, 1, 3, 6, 8, 9], "markov": [0, 1, 3, 4, 6, 7, 9], "chain": [0, 1, 6, 7, 9], "To": [0, 1, 3, 4, 5, 6, 8], "give": [0, 1, 3, 4, 5, 8], "one": [0, 1, 2, 3, 4, 5, 6, 7, 8], "exampl": [0, 1, 3, 4, 6, 7, 8], "why": [0, 1], "theori": [0, 1, 2, 4, 5, 6, 8, 9], "matter": 0, "consid": [0, 1, 4, 5, 6, 8], "queue": [0, 1], "which": [0, 1, 2, 3, 4, 5, 6, 7, 8], "ar": [0, 2, 3, 4, 5, 6, 7, 8], "often": [0, 1, 3, 4, 5], "model": [0, 4, 9], "us": [0, 1, 2, 3, 4, 5, 6, 7, 8], "applic": [0, 1, 2, 4, 5, 8, 9], "treatment": [0, 1, 4, 8], "patient": 0, "arriv": [0, 3, 5, 6, 7], "hospit": 0, "optim": 0, "design": 0, "manufactur": 0, "process": [0, 1, 2, 3, 6, 8, 9], "file": 0, "server": 0, "air": 0, "traffic": 0, "custom": [0, 3, 5, 6, 7], "wait": [0, 3, 4, 5, 6, 7], "helplin": 0, "A": [0, 3, 4, 6, 7, 9], "kei": [0, 4], "topic": [0, 2], "averag": 0, "over": [0, 1, 4, 5, 6], "long": [0, 5, 6], "run": [0, 5, 8], "Will": 0, "length": [0, 1, 5, 7], "grow": [0, 8], "without": [0, 3, 6], "bound": [0, 1, 5], "If": [0, 1, 3, 4, 5, 6, 7, 8], "some": [0, 1, 2, 3, 4, 5, 6, 7, 8], "kind": [0, 6], "so": [0, 1, 3, 4, 5, 6, 7, 8], "week": 0, "month": 0, "import": [0, 1, 3, 4, 5, 6, 7, 8], "np": [0, 3, 4, 5, 6, 7], "sp": [0, 3, 4, 5], "matplotlib": [0, 3, 4, 5, 6, 7], "pyplot": [0, 3, 4, 5, 6, 7], "plt": [0, 3, 4, 5, 6, 7], "qe": [0, 3, 4, 5, 6, 7], "njit": [0, 3, 4, 5, 6, 7], "linalg": [0, 3, 4, 5], "expm": [0, 3, 4, 5], "cm": [0, 4, 5], "mpl_toolkit": [0, 4, 5], "mplot3d": [0, 4, 5], "axes3d": [0, 4, 5], "art3d": [0, 4], "poly3dcollect": [0, 4], "let": [0, 1, 3, 4, 5, 6, 7, 8], "countabl": [0, 4, 8], "recal": [0, 1, 3, 4, 5, 8], "discret": [0, 1, 2, 6, 7, 8], "matrix": [0, 1, 3, 5], "p": [0, 1, 3, 4, 5, 7, 8], "psi": [0, 3, 4, 5], "call": [0, 1, 3, 4, 5, 6, 7, 8], "mean": [0, 3, 5, 6, 7], "x_t": [0, 1, 3, 4, 5, 8], "ha": [0, 1, 3, 4, 5, 6, 7, 8], "doe": [0, 1, 5], "x_": [0, 5], "t": [0, 1, 3, 4, 5, 6, 7, 8], "For": [0, 1, 3, 4, 5, 7, 8], "analog": [0, 1, 3, 4, 5, 8], "given": [0, 1, 3, 4, 5, 6, 7, 8], "semigroup": [0, 2, 4, 9], "p_t": [0, 1, 3, 4, 5, 8], "dd": [0, 3, 4, 5, 8], "text": [0, 1, 3, 4, 5, 6, 7, 8], "all": [0, 1, 3, 4, 5, 6, 7, 8], "geq": [0, 1, 3, 4, 5, 6, 7, 8], "As": [0, 3, 4, 5, 6, 7, 8], "look": [0, 2, 3, 5, 8], "again": [0, 1, 4, 5, 6, 7, 8], "intens": [0, 1, 4, 5], "q": [0, 1, 3, 4, 5, 8], "6": [0, 1, 3, 4, 5, 7, 8], "10": [0, 3, 4, 5, 6, 7], "The": [0, 2], "figur": [0, 3, 4, 5, 6, 7], "wa": [0, 1, 3, 4, 5, 6, 8], "shown": [0, 5, 6, 7], "befor": [0, 4, 5], "except": 0, "now": [0, 3, 4, 5, 6, 7, 8], "black": [0, 6], "dot": 0, "three": [0, 1, 3, 4, 6], "trajectori": [0, 1], "seem": [0, 3, 5], "converg": [0, 1, 6, 7, 8], "color": [0, 4, 5], "scheme": 0, "cool": [0, 4, 5], "evolv": [0, 4, 5], "def": [0, 3, 4, 5, 6, 7], "unit_simplex": [0, 4], "angl": [0, 4], "fig": [0, 3, 4, 5, 6, 7], "figsiz": [0, 4, 5, 7], "ax": [0, 3, 4, 5, 6, 7], "add_subplot": [0, 4, 5], "111": [0, 4, 5], "project": [0, 4, 5], "3d": [0, 4, 5], "vtx": [0, 4], "tri": [0, 4, 6], "darkblu": [0, 4], "alpha": [0, 1, 3, 4, 5, 6, 7], "set_facecolor": [0, 4], "add_collection3d": [0, 4], "set": [0, 1, 3, 4, 6, 7, 8], "xlim": [0, 4], "ylim": [0, 4], "zlim": [0, 4], "xtick": [0, 4, 7], "ytick": [0, 4, 7], "ztick": [0, 4], "set_xticklabel": [0, 4, 7], "fontsiz": [0, 3, 4, 7], "set_yticklabel": [0, 4], "set_zticklabel": [0, 4], "xaxi": [0, 4], "majortick": [0, 4], "set_pad": [0, 4], "15": [0, 4, 7], "yaxi": [0, 4], "zaxi": [0, 4], "35": [0, 4], "view_init": [0, 4], "move": [0, 4, 5, 8], "axi": [0, 4], "origin": [0, 4], "_axinfo": [0, 4], "juggl": [0, 4], "grid": [0, 4, 5, 6, 7], "fals": [0, 4, 5], "return": [0, 1, 3, 4, 5, 6, 7], "arrai": [0, 4, 5], "\u03c8_00": [0, 4], "01": [0, 4], "99": [0, 4], "\u03c8_01": [0, 4], "\u03c8_02": [0, 4], "50": [0, 4, 6, 7], "flow_plot": [0, 4], "\u03c8": [0, 3, 4, 5], "h": [0, 1, 4, 5, 6, 7], "001": [0, 4], "n": [0, 1, 3, 4, 5, 6, 7, 8], "300": 0, "jet_r": [0, 4, 5], "linspac": [0, 4, 5, 6], "x_val": [0, 4], "y_val": [0, 4, 5], "z_val": [0, 4], "rang": [0, 3, 4, 5, 6, 7], "append": [0, 4, 5], "scatter": [0, 4], "c": [0, 4, 8, 9], "20": [0, 4, 5], "depthshad": [0, 4], "add": [0, 5], "p_1": 0, "mc": 0, "markovchain": 0, "stationary_distribut": 0, "k": [0, 1, 3, 4, 5, 6, 7, 8, 9], "show": [0, 1, 3, 4, 5, 6, 7, 8], "It": [0, 1, 3, 4, 5, 6, 7, 8], "calcul": [0, 3, 5], "attribut": 0, "class": [0, 6], "arbitrarili": 0, "solv": [0, 1, 2, 3, 4, 5, 8], "below": [0, 1, 3, 4, 5, 6, 7, 8], "choic": [0, 8], "due": [0, 3, 5, 6, 7], "moreov": [0, 1, 4, 5, 6, 7, 8], "infti": [0, 1, 3, 4, 5, 6, 7, 8], "ani": [0, 1, 3, 4, 5, 6, 7, 8], "suggest": [0, 1, 4], "mani": [0, 1, 2, 3, 5, 6, 7], "case": [0, 1, 3, 6, 7], "easier": [0, 3, 8], "identifi": [0, 1, 4, 5, 8], "rather": [0, 1, 2, 3, 5, 6], "than": [0, 1, 2, 3, 4, 5, 6], "itself": [0, 1, 4, 5, 8], "idea": [0, 1, 2, 3, 4, 5, 6, 7, 8], "point": [0, 1, 5, 7, 8], "bar": [0, 3, 5], "x": [0, 1, 3, 4, 5, 6, 8], "rr": [0, 1, 4, 5, 8], "d": [0, 1, 3, 4, 5], "vector": [0, 3, 5, 8], "od": [0, 1, 3], "_t": [0, 1, 3, 4, 8], "f": [0, 1, 3, 6, 7, 8], "when": [0, 1, 3, 4, 5, 6, 7, 8], "here": [0, 3, 4, 5, 6, 7, 8], "infinitesim": [0, 1, 3, 4], "descript": [0, 1, 3, 4, 5], "henc": [0, 1, 3, 4, 5, 6, 7, 8], "next": [0, 1, 3, 5, 6, 7, 8], "result": [0, 1, 3, 4, 5, 6, 8], "hold": [0, 1, 3, 4, 5, 6, 8], "true": [0, 1, 3, 4, 5, 7], "under": [0, 1, 4, 5, 8], "weaker": 0, "condit": [0, 3, 4, 5], "version": [0, 1, 3, 5], "state": [0, 1, 4, 6, 7], "easi": [0, 1, 3, 4, 5, 8], "prove": [0, 1, 3, 4, 5, 6, 8], "suffici": [0, 6], "uc": [0, 2], "onli": [0, 4, 5, 6, 7, 8], "proof": [0, 1, 3, 4, 5, 6, 7, 8], "fix": [0, 1, 3, 4, 5, 6, 7, 8], "suppos": [0, 3, 4, 5, 6, 7, 8], "first": [0, 1, 3, 4, 5, 6, 7, 8], "sinc": [0, 1, 3, 5, 6, 7, 8], "have": [0, 1, 2, 3, 4, 5, 6, 7, 8], "e": [0, 1, 3, 4, 5, 6, 7, 8], "tq": [0, 1, 3, 4, 8], "frac": [0, 1, 3, 4, 5, 6, 7, 8], "cdot": [0, 1, 3, 4, 5, 7, 8], "get": [0, 4, 5, 6], "nn": [0, 5, 6], "last": [0, 1, 3, 5, 6, 8], "displai": [0, 5], "yield": [0, 3], "d_t": 0, "i": [0, 1, 2, 3, 4, 5, 6, 7, 8], "triangl": [0, 8], "inequ": [0, 8], "oper": [0, 2, 4, 8, 9], "norm": [0, 1, 8], "leq": [0, 1, 3, 5, 6, 7, 8], "its": [0, 1, 5, 6, 7], "ll": [0, 1, 8], "ell_1": [0, 1, 8], "liminf_": 0, "downarrow": [0, 1, 4], "arbitrari": [0, 1, 3, 5, 7, 8], "y": [0, 3, 4, 5, 6, 8], "sai": [0, 1, 4, 5, 6, 8], "access": 0, "exist": [0, 1, 4, 5, 6, 7, 8], "commun": 0, "everi": [0, 1, 4, 5, 8], "pair": [0, 1, 4, 5], "seek": 0, "character": [0, 8], "term": [0, 3], "step": [0, 3, 5, 7, 8], "posit": [0, 5, 6, 8], "probabl": [0, 3, 4, 5, 6, 7, 8, 9], "flow": [0, 1, 4, 8], "finit": [0, 1, 3, 4, 7], "sequenc": [0, 1, 3, 5, 6, 7], "z_i": 0, "_": [0, 1, 3, 5, 7], "m": [0, 1, 3, 4, 5, 6, 7, 8], "start": [0, 1, 2, 3, 4, 5, 6, 7], "z_0": 0, "end": [0, 3, 4, 5, 6, 7, 8], "z_m": 0, "z_": 0, "distinct": 0, "statement": [0, 1, 4, 5, 6, 7, 8], "equival": [0, 1, 4, 5, 7, 8], "There": [0, 1, 2, 4, 5], "pick": [0, 1, 5, 8], "two": [0, 5, 6], "obviou": [0, 5, 8], "impli": [0, 1, 3, 5, 8], "least": [0, 4, 8], "write": [0, 1, 3, 4, 5, 6, 8], "out": [0, 1, 4, 5, 8], "product": [0, 1, 3, 5, 8], "sum": [0, 1, 3, 4, 5, 8], "sum_": [0, 1, 3, 4, 5, 6, 7, 8], "z_1": 0, "z_2": 0, "element": [0, 1, 3, 4, 5, 8, 9], "must": [0, 3, 4, 5, 6], "strictli": [0, 7], "therefor": 0, "turn": [0, 1, 5, 6], "note": [0, 3, 5, 6, 8], "u": [0, 1, 3, 5], "v": [0, 1, 3, 7], "see": [0, 1, 3, 4, 5, 6, 7, 8], "lambda": [0, 3, 4, 5, 6, 7, 8], "jump": [0, 6], "construct": [0, 3, 4, 6, 7], "9": [0, 1, 4, 5, 8], "observ": [0, 1, 3, 4, 5, 6, 7], "consequ": [0, 7], "appli": [0, 3, 4, 5, 7, 8], "y_k": [0, 3, 5], "j_k": [0, 3, 5, 7], "embed": [0, 3, 8], "algorithm": [0, 4, 6, 8, 9], "y_0": [0, 3, 5], "With": [0, 5], "e_1": 0, "sim": [0, 5, 6, 7], "exp": [0, 3, 5, 6, 7], "e_2": 0, "begin": [0, 3, 4, 5, 6, 8], "align": [0, 3, 5], "pp": [0, 3, 5, 6, 7], "j_1": [0, 3], "y_1": [0, 3, 5], "j_2": 0, "repeatedli": 0, "along": [0, 3, 4, 5, 8], "obtain": [0, 3, 4, 5, 6, 7, 8], "prod_": 0, "p_": [0, 3, 4, 5], "theorem": [0, 1, 4, 5, 6, 7, 8], "lead": [0, 3, 4, 5, 8], "directli": [0, 1, 4, 8], "strong": [0, 5], "stabl": 0, "common": [0, 5, 6], "assum": [0, 1, 2, 3, 4, 5, 8], "aperiod": 0, "top": 0, "wish": [0, 1, 5], "rule": [0, 4], "depend": [0, 4, 5, 6, 7, 8], "initi": [0, 1, 3, 4, 5, 8], "corollari": [0, 5], "period": 0, "concern": [0, 1], "immedi": [0, 3, 4, 5, 6, 7, 8], "our": [0, 1, 3, 4, 5, 6, 7, 8], "aim": [0, 1, 2, 5, 8], "establish": [0, 1, 6, 8], "fact": [0, 1, 3, 4, 5, 6, 7, 8], "about": [0, 1, 3, 5, 6], "becaus": [0, 1, 3, 4, 5, 6, 7, 8], "sum_i": [0, 3, 5, 7, 8], "left": [0, 3, 4, 6, 8], "sum_x": [0, 5, 8], "right": [0, 1, 3, 4, 5, 6, 7, 8], "By": [0, 4, 6], "linear": [0, 3, 8, 9], "phi": [0, 5, 8], "everywher": [0, 1, 8], "oppos": 0, "weak": 0, "proposit": 0, "lasota": [0, 9], "mackei": [0, 9], "1994": [0, 9], "lemma": [0, 1, 4, 7, 8], "stachurski": [0, 2, 9], "2009": [0, 9], "disjoint": 0, "absorb": [0, 8], "most": [0, 1, 4, 5], "contrari": 0, "both": [0, 4, 5, 6, 8], "know": [0, 5, 6, 8, 9], "At": [0, 1, 5, 6], "same": [0, 1, 3, 4, 5, 6, 7, 8], "contradict": [0, 8], "an": [0, 1, 2, 4, 5, 6, 7, 8, 9], "paramet": [0, 3, 5, 6, 7], "mu": 0, "zz_": [0, 5, 6, 7, 8], "pmatrix": [0, 4, 8], "vdot": [0, 8], "ddot": 0, "record": 0, "each": [0, 1, 3, 4, 5, 6, 7, 8], "moment": 0, "captur": 0, "rate": [0, 3, 4, 6, 7, 8], "serv": 0, "leav": [0, 4, 8], "between": [0, 1, 2, 3, 4, 5, 6, 7, 8], "direct": [0, 1, 5], "correspond": [0, 4, 5, 8], "tell": [0, 1, 4, 6], "individu": 0, "connect": [0, 1, 4, 5, 6, 7, 8], "critic": 0, "ingredi": 0, "link": [0, 7, 8], "concept": 0, "epsilon": 0, "can": [0, 1, 3, 4, 5, 6, 8], "take": [0, 1, 3, 4, 5, 6, 7, 8], "sn": 0, "p_h": [0, 1, 4], "section": [0, 1, 4, 5, 6, 7, 8], "address": 0, "power": [0, 1, 5, 6, 8], "method": 0, "space": [0, 2, 3, 6, 8], "infinit": [0, 1, 4, 8], "tend": 0, "back": [0, 4, 5], "Such": [0, 1], "combin": [0, 1, 2, 3, 4, 8], "enough": [0, 5, 8], "global": 0, "function": [0, 3, 4, 5, 6, 7, 8, 9], "colon": [0, 3, 8], "rr_": [0, 1, 3, 5, 6, 8], "subset": [0, 6, 7], "constant": [0, 1, 3, 4, 8], "otherwis": [0, 3, 5, 8], "found": [0, 1, 4, 7], "pich": [0, 9], "\u00f3": [0, 9], "r": [0, 3, 5, 7, 9], "et": 0, "al": 0, "2012": [0, 5, 9], "intuit": [0, 2, 3, 4, 5, 7, 8], "infin": [0, 8], "servic": 0, "higher": 0, "confirm": [0, 3, 4, 6, 8], "after": [0, 1, 3, 4, 5, 6, 7], "j": [0, 2, 3, 5, 7, 8], "inde": [0, 1, 3, 5, 7], "associ": [0, 1, 3, 4, 7, 8], "ask": [0, 3, 5, 7, 8], "you": [0, 1, 3, 4, 5, 6, 7, 8], "lambda_k": 0, "non": 0, "increas": [0, 6, 7], "pure": [0, 3], "birth": 0, "zero": [0, 1, 3, 4, 5, 6, 7, 8], "lambda_0": 0, "lambda_1": 0, "lambda_2": 0, "Then": [0, 5, 6, 7, 8], "lambda_j": 0, "lambda_": 0, "decreas": [0, 6], "But": [0, 4, 6, 8], "contain": [0, 8], "seen": [1, 3, 4, 6], "previou": [1, 3, 5, 6, 7, 8], "also": [1, 3, 4, 5, 6, 7, 8], "hint": [1, 4, 5], "sens": [1, 4, 5, 6], "made": [1, 3], "precis": [1, 5], "clarifi": [1, 3, 4, 5, 6], "abstract": [1, 4, 5], "valu": [1, 3, 5, 7, 8], "problem": [1, 4, 5, 8], "introduc": [1, 5, 8], "onc": 1, "done": [1, 3], "abl": 1, "fulli": 1, "matric": [1, 4, 5], "materi": 1, "rel": [1, 6, 8], "technic": [1, 3, 4, 5], "complic": 1, "driven": 1, "hard": [1, 3, 8], "avoid": [1, 4], "interest": [1, 5, 6], "do": [1, 3, 4, 5, 7, 8], "veri": [1, 5, 6, 8], "poisson": [1, 2, 6, 8], "anoth": [1, 3, 5, 6, 7, 8], "studi": [1, 3], "natur": [1, 4, 5], "upper": 1, "reader": [1, 2, 5], "basic": [1, 6], "familiar": [1, 5], "banach": [1, 2, 8], "dimension": [1, 3, 4, 5, 8], "more": [1, 3, 4, 5, 6, 8], "specif": [1, 5], "challeng": 1, "quad": [1, 3, 4, 6, 7], "x_0": [1, 3, 4, 5], "where": [1, 3, 4, 5, 7, 8], "deriv": [1, 3, 4, 8], "definit": [1, 3, 4, 5, 6, 7, 8], "appropri": 1, "cauchi": 1, "One": [1, 3, 5, 7], "come": [1, 6], "from": [1, 2, 5, 7], "pde": [1, 3], "how": [1, 4, 5, 6, 8], "chang": [1, 3, 4, 5, 6, 8], "fit": [1, 6, 7], "framework": 1, "distribut": [1, 2, 3, 7, 8], "repres": [1, 3, 4, 5, 8], "number": [1, 5, 6, 7, 9], "high": 1, "level": [1, 4, 5], "view": [1, 7, 8], "mapsto": [1, 3, 4, 5, 6, 8], "u_t": 1, "map": [1, 3, 4, 5, 8], "throughout": [1, 4], "bb": 1, "g": [1, 3, 4, 7, 8], "beta": 1, "foral": [1, 6], "sup_": [1, 5], "usual": [1, 4, 5], "denot": [1, 3, 4, 5, 6], "linop": 1, "scalar": [1, 3, 8], "defin": [1, 3, 4, 5, 6, 7, 8], "wai": [1, 3, 5, 6, 7, 8], "b": [1, 3, 5, 7, 9], "ag": 1, "bg": 1, "indic": [1, 4, 5, 7], "composit": [1, 8], "notat": [1, 5], "being": [1, 4], "enjoi": 1, "submultipl": 1, "properti": [1, 2, 4, 8], "ab": [1, 3], "ident": [1, 3, 5, 8], "ig": 1, "unit": [1, 3, 4, 5], "algebra": [1, 5], "multipl": [1, 5, 8], "adopt": [1, 3], "aris": [1, 8], "shall": [1, 6], "well": [1, 3, 4, 5, 7, 8], "ba": [1, 3], "invert": 1, "easili": [1, 3, 4, 8], "check": [1, 4, 5, 8], "ones": [1, 3, 4], "ni": [1, 5], "think": [1, 3, 5, 6], "path": [1, 3, 4, 5, 8], "tau": [1, 3, 5], "u_": 1, "dt": [1, 3, 4], "big": 1, "limit": [1, 4, 5, 6], "kolmogorov": [1, 2, 5, 8], "forward": [1, 2, 5, 8], "equat": [1, 2, 5, 8, 9], "coincid": 1, "theoret": 1, "consist": [1, 3, 5, 6, 8], "pointwis": [1, 4, 8], "ta": [1, 3], "saw": [1, 8], "form": [1, 3, 5, 6, 8], "ideal": 1, "entir": [1, 3, 5, 6], "simpl": [1, 5, 8], "alwai": [1, 3, 4, 5, 8], "provid": [1, 2, 4, 5, 7, 8], "restrict": [1, 3, 4, 8], "place": [1, 5], "make": [1, 5, 6], "special": [1, 3, 5, 6, 7, 8], "evolut": [1, 4, 5], "u_0": 1, "interpret": [1, 5], "locat": 1, "c_0": [1, 8], "abbrevi": [1, 5], "claim": [1, 3, 6, 7, 8], "abov": [1, 3, 4, 5, 6, 7, 8], "uniform": [1, 5, 7], "argument": [1, 3, 4, 5, 8], "similar": [1, 5, 7], "those": [1, 5, 6], "revers": 1, "certainli": 1, "fail": [1, 3, 5, 6], "diffus": [1, 4], "other": [1, 3, 4, 5, 6, 7, 8], "typic": [1, 5], "howev": [1, 8], "soon": [1, 5, 6], "specifi": [1, 6], "backward": [1, 2, 8], "p_0": [1, 3, 4, 5, 8], "recov": [1, 5], "via": [1, 2, 3, 4, 5, 7, 8], "_0": [1, 4], "lim_": [1, 4, 5, 6, 8], "u_h": 1, "domain": 1, "would": [1, 5], "like": [1, 4, 5, 6], "express": [1, 5, 7, 8], "should": 1, "even": [1, 5], "though": 1, "might": [1, 3, 5, 7, 8], "unbound": 1, "problemat": 1, "despit": 1, "issu": [1, 8], "work": [1, 3, 4, 8], "circumv": 1, "better": 1, "focu": [1, 3, 8], "detail": [1, 5, 7, 8], "while": [1, 3, 4, 5, 6, 7, 8], "slightli": 1, "represent": [1, 3], "extens": [1, 5], "someth": 1, "quit": [1, 5], "memoryless": [1, 2, 5, 7], "sahoo": [1, 9], "kannappan": [1, 9], "2011": [1, 9], "full": [1, 3, 5], "chapter": 1, "bobrowski": [1, 9], "2005": [1, 9], "steinhau": 1, "omega": 1, "particular": [1, 3, 4, 6, 7, 8], "t_n": 1, "equal": [1, 3, 4, 5, 8], "suffic": 1, "o": [1, 4, 7], "verifi": [1, 3, 5, 7, 8], "complet": [1, 5, 6, 8], "second": [1, 3, 4, 6, 7, 8], "h_n": 1, "On": [1, 5, 8], "hand": [1, 3, 5, 7, 8], "major": 1, "explod": [1, 8], "cannot": [1, 5], "properli": 1, "explor": [1, 5], "unless": 1, "allow": [1, 3, 5], "excel": 1, "introduct": [1, 2, 5, 6, 9], "applebaum": [1, 9], "2019": [1, 9], "bounded": [1, 8], "Be": 1, "care": [1, 4], "terminolog": [1, 4, 5], "author": 2, "thoma": [2, 9], "sargent": 2, "john": [2, 9], "These": [2, 4, 5, 8], "short": 2, "mathemat": [2, 3, 5, 6, 9], "comput": [2, 5, 8, 9], "code": [2, 3, 4, 5, 6, 7], "build": [2, 5, 8], "bridg": 2, "gap": 2, "exercis": 2, "present": [2, 3], "rigor": 2, "toward": 2, "curios": 2, "plenti": 2, "drawn": [2, 3], "econom": [2, 5, 9], "financ": [2, 9], "research": 2, "knowledg": 2, "later": [2, 3, 4, 5, 6], "small": [2, 3, 5, 6, 7], "amount": [2, 3, 5, 6], "analysi": [2, 6, 9], "written": [2, 3, 4], "python": 2, "acceler": 2, "jit": 2, "compil": 2, "gener": [2, 3, 4, 5, 7], "stationar": [2, 5], "ergod": 2, "bibliographi": 2, "8": [3, 4, 5, 6, 7], "becom": [3, 5, 6, 7], "complex": 3, "analyt": [3, 4, 8], "harder": 3, "lack": [3, 8], "determinist": 3, "down": [3, 4, 5], "shine": 3, "insight": 3, "great": 3, "scientist": 3, "isaac": 3, "newton": 3, "help": [3, 5, 6, 7], "investig": [3, 7], "stat": [3, 5], "binom": [3, 5, 6, 7], "mathbb": [3, 4, 5, 7, 8], "j_": [3, 5, 7], "qquad": [3, 4, 5, 6, 7, 8], "w_k": [3, 5, 7], "were": 3, "iid": [3, 5, 6, 7], "vari": 3, "differ": [3, 5, 6, 7], "sound": 3, "minor": [3, 8], "reach": 3, "new": [3, 5, 7], "assumpt": [3, 4], "conveni": [3, 5], "unlik": [3, 6], "relax": [3, 5], "primit": [3, 5], "draw": [3, 5, 6, 7], "w": [3, 5, 6, 7, 9], "updat": [3, 4, 5], "repeat": [3, 4, 7, 8], "explicitli": [3, 4, 5], "input": [3, 5], "output": [3, 5], "j_0": [3, 5, 7], "independ": [3, 5, 6], "y_": [3, 5], "go": [3, 5, 8], "actual": 3, "describ": [3, 4, 5], "trivial": 3, "approach": [3, 4, 5, 9], "probabilist": [3, 8], "reason": 3, "convert": 3, "question": [3, 4, 5], "name": [3, 7], "list": 3, "obei": 3, "int_0": 3, "implicitli": 3, "regard": [3, 4, 5, 6], "side": [3, 5, 7, 8], "ee": [3, 4], "w_1": [3, 7], "evalu": [3, 7], "expect": [3, 4, 5, 7, 8], "sum_z": [3, 5, 8], "z": [3, 5, 6, 8], "simplifi": [3, 5], "further": [3, 5, 6, 7], "lose": 3, "inform": [3, 5, 7], "main": [3, 4, 8], "taken": [3, 4, 5], "respect": [3, 5, 6], "y_t": 3, "encourag": 3, "guess": 3, "difficult": [3, 5, 7], "convinc": 3, "notic": [3, 6], "earlier": [3, 7, 8], "obvious": [3, 5], "still": [3, 8], "row": [3, 4, 5, 6, 8], "column": [3, 4], "iff": 3, "i1": 3, "tq1": 3, "word": [3, 5, 6, 7, 8], "nonneg": [3, 4, 5, 6, 7, 8], "stroock": [3, 9], "2013": [3, 9], "max_x": [3, 4], "hat": [3, 4, 5, 7, 8], "whenev": [3, 4, 5, 6, 8], "tm": 3, "clear": [3, 7], "entri": [3, 6], "final": [3, 5], "part": 3, "reassur": 3, "answer": [3, 5, 7], "coeffici": 3, "suppli": [3, 6, 8], "modifi": 3, "gamma": 3, "\u03b1": [3, 5], "\u03bb": [3, 5, 6, 7], "\u03b3": 3, "plan": 3, "psi_t": [3, 4, 5], "simul": [3, 4, 6, 7], "histogram": [3, 5], "them": [3, 5], "draw_x": [3, 6], "max_it": [3, 7], "5000": 3, "els": [3, 5, 6], "random": [3, 5, 6, 7], "scale": [3, 5, 6, 7], "geometr": [3, 5, 7], "min": [3, 5], "independent_draw": 3, "num_draw": [3, 7], "100": [3, 5, 6, 7], "empti": [3, 6, 7], "dtype": 3, "int64": 3, "binomi": [3, 5, 7], "25": [3, 5, 7], "100_000": 3, "subplot": [3, 5, 6, 7], "width": [3, 5], "set_xlabel": [3, 5], "14": [3, 4], "experi": [3, 7], "larg": [3, 5, 6, 7], "mass": 3, "low": 3, "approxim": [3, 7], "try": [3, 4, 5, 7, 8], "instead": [3, 7], "worth": [3, 4, 8], "current": [3, 4, 5, 6, 7, 8], "support": [3, 5, 6, 7], "sphinx": [3, 5, 6, 7], "cell": [3, 5, 6, 7], "block": [3, 5, 6, 7], "arang": [3, 5, 7], "empty_lik": 3, "\u03c8_0": [3, 5], "pmf": [3, 5, 7], "\u03c8_t": 3, "variabl": [3, 5, 6, 7], "rewrit": 3, "rearrang": 3, "v_": 3, "v_0": 3, "v_t": 3, "_s": 3, "perspect": [4, 8], "emphasi": 4, "through": [4, 5, 8], "differenti": [4, 8], "autonom": 4, "ordinari": [4, 5], "order": [4, 5, 6], "distract": 4, "defer": 4, "previous": [4, 5, 8], "inventori": 4, "certain": 4, "parameter": [4, 6], "hot": [4, 5], "earli": [4, 5], "date": [4, 5], "learn": [4, 5, 7], "relat": [4, 7, 8], "examin": [4, 7], "systemat": 4, "accord": [4, 5], "psi_": 4, "psi_0": [4, 5], "understood": [4, 5], "visual": [4, 7], "standard": [4, 5], "simplex": 4, "convergence_plot": 4, "homogen": [4, 5], "send": 4, "haven": 4, "uniqu": [4, 5], "togeth": 4, "object": [4, 5, 8], "joint": 4, "just": [4, 5, 7, 8], "argu": 4, "strongli": 4, "correct": [4, 5, 7], "rest": 4, "x_1": [4, 5], "x_n": [4, 5], "exponenti": [4, 5, 8], "dynam": [4, 9], "vertex": 4, "400": 4, "premultipli": [4, 8], "understand": [4, 5, 8], "push": 4, "postmultipli": 4, "pin": 4, "sometim": [4, 7], "fokker": 4, "planck": 4, "although": [4, 5, 6, 8], "commonli": 4, "context": 4, "comparison": 4, "And": 4, "realli": 4, "less": 4, "want": 4, "fundament": [4, 5], "chosen": [4, 5], "remain": 4, "exact": [4, 8], "up": [4, 5, 6, 7], "invari": 4, "rephras": 4, "impos": 4, "squar": 4, "extend": 4, "mild": [4, 5, 8], "creat": [4, 5], "inflow": 4, "minu": 4, "outflow": 4, "henceforth": [4, 5], "been": [4, 5], "carri": [4, 5], "suitabl": 4, "univers": [4, 9], "thei": [4, 5, 7, 8], "transit": 4, "adapt": 4, "nontrivi": [4, 7], "off": [4, 8], "diagon": [4, 8], "assert": 4, "modif": 4, "unchang": [4, 8], "conclud": [4, 5, 7, 8], "convers": [4, 6, 8], "implic": 4, "emploi": 4, "stochast": [5, 7, 9], "said": [5, 6], "past": 5, "futur": [5, 6], "formal": 5, "structur": 5, "eleg": 5, "cover": [5, 8], "includ": 5, "supremum": 5, "sup_x": [5, 8], "reduc": 5, "notion": [5, 8], "mental": 5, "a_": 5, "ij": 5, "involv": 5, "treat": 5, "review": 5, "shift": 5, "simplest": [5, 7], "ldot": [5, 6, 7], "histori": [5, 6], "x_2": 5, "mathbf": 5, "t_1": [5, 6], "t_m": 5, "y_m": 5, "t_i": [5, 6, 7], "y_i": 5, "integ": [5, 6, 7], "collect": [5, 8], "walsh": [5, 9], "cartesian": 5, "famili": [5, 8], "That": [5, 7], "known": [5, 7], "exactli": 5, "swap": 5, "justifi": 5, "tonelli": 5, "th": [5, 7, 8], "chapman": 5, "law": 5, "total": 5, "x_k": 5, "x_j": 5, "preced": [5, 8], "index": 5, "practic": 5, "cours": 5, "goe": [5, 8], "noth": 5, "clearer": 5, "ff_": 5, "x_r": 5, "until": [5, 7], "economist": 5, "measur": 5, "sigma": 5, "determin": [5, 8], "plu": 5, "rc": 5, "le": [5, 9], "gall": [5, 9], "2016": [5, 9], "affirm": 5, "illustr": [5, 6, 7], "pi_t": 5, "simpli": 5, "report": 5, "automat": 5, "littl": 5, "fortun": [5, 8], "concret": 5, "pareto": [5, 6], "switch": 5, "close": [5, 6], "interv": [5, 6, 7], "prior": 5, "predict": [5, 6], "thu": [5, 8], "summari": 5, "markovian": 5, "possess": 5, "n_": [5, 7], "increment": 5, "n_t": [5, 7, 8], "replac": 5, "firm": 5, "upon": 5, "purchas": 5, "delai": 5, "exposit": 5, "either": [5, 6, 7], "stock": 5, "track": 5, "size": [5, 7], "effici": 5, "stage": 5, "sim_path": 5, "seed": [5, 6, 7], "123": 5, "j_val": 5, "break": 5, "searchsort": 5, "plot": [5, 6, 7], "label": [5, 6, 7], "xlabel": [5, 7], "ylabel": 5, "legend": [5, 6, 7], "fall": [5, 6], "Its": 5, "focus": 5, "far": [5, 6], "summar": [5, 8], "data": 5, "govern": 5, "altern": [5, 7, 8], "parsimoni": 5, "Not": 5, "confus": 5, "11": 5, "stationari": 5, "whole": 5, "n_r": [5, 7], "restart": [5, 6], "occur": [5, 6, 7, 8], "analyz": 5, "plug": 5, "develop": 5, "option": 5, "outcom": [5, 6], "cross": [5, 6], "insert": [5, 7, 8], "uncount": 5, "iter": 5, "200": [5, 6], "reproduc": 5, "binari": [5, 7], "bernoulli": 5, "formula": 5, "produc": [5, 8], "your": 5, "own": 5, "desir": 5, "could": 5, "ell": 5, "agre": [5, 7, 8], "induct": [5, 7], "hypothesi": 5, "glue": 5, "book": 5, "delet": 5, "store": 5, "elsewher": 5, "plot_distribution_dynam": 5, "step_siz": 5, "zs": 5, "zdir": 5, "set_ylabel": 5, "myst_nb": 5, "flow_fig": 5, "savefig": 5, "_static": 5, "lecture_specif": 5, "markov_prop": 5, "png": 5, "liggett": [5, 9], "2010": [5, 9], "insist": 5, "convent": 5, "valid": [5, 8], "3": [6, 7], "forget": 6, "elaps": 6, "remark": [6, 7], "similarli": 6, "factori": [6, 7], "bet": 6, "roulett": 6, "wheel": 6, "red": 6, "four": 6, "five": 6, "event": 6, "peopl": 6, "instinct": 6, "feel": 6, "fifth": 6, "spin": 6, "sure": [6, 8], "ration": 6, "thought": 6, "wrong": 6, "casino": 6, "offer": 6, "unlimit": 6, "free": 6, "alcohol": 6, "beverag": 6, "discourag": 6, "restat": 6, "phenomenon": 6, "theta": [6, 7], "across": 6, "occurr": 6, "succe": 6, "regardless": 6, "uncondit": 6, "poor": 6, "enter": 6, "shop": [6, 7], "t_0": 6, "evenli": 6, "t_": [6, 7], "proport": [6, 7], "imagin": 6, "pass": 6, "halv": 6, "largest": 6, "finer": 6, "approx": [6, 7], "attest": 6, "exceed": 6, "third": 6, "ln": 6, "real": 6, "rais": 6, "a_n": 6, "b_n": 6, "proceed": 6, "proper": 6, "hour": 6, "erlang": [6, 7], "densiti": 6, "shape": [6, 7], "t_grid": [6, 7], "__init__": 6, "self": 6, "__call__": 6, "e1": 6, "e2": 6, "75": [6, 7], "syntaxwarn": [6, 7], "invalid": [6, 7], "escap": [6, 7], "l": 6, "tmp": [6, 7], "ipykernel_5254": 6, "1026889215": 6, "py": [6, 7], "cdf": [6, 7], "w_i": [6, 7], "j_n": [6, 7], "stop": [6, 7], "threshold": 6, "000": 6, "fraction": 6, "sampl": [6, 7], "compar": [6, 7], "Is": 6, "good": [6, 7], "line": [6, 7], "1234": [6, 7], "1_000": 6, "empirical_exceed": 6, "empir": [6, 7], "match": 6, "indistinguish": 6, "10_000": [6, 7], "visitor": 7, "websit": 7, "restaur": 7, "etc": [7, 8], "deep": 7, "necessarili": 7, "visit": 7, "ks": 7, "js": 7, "len": 7, "hline": 7, "vline": 7, "xticklabel": 7, "loc": 7, "lower": 7, "max": 7, "rational": 7, "behind": 7, "consum": 7, "s29": 7, "howard": [7, 9], "appeal": [7, 8], "realiz": 7, "ws": 7, "cumsum": 7, "ys": 7, "lw": 7, "featur": 7, "norri": [7, 8, 9], "1998": [7, 8, 9], "theta_n": 7, "environ": 7, "ih": 7, "v_i": 7, "separ": 7, "vertic": 7, "t_tick": 7, "set_ytick": 7, "set_xtick": 7, "ls": 7, "center": 7, "ipykernel_5284": 7, "1718099611": 7, "kh": 7, "t_k": 7, "none": 7, "m_t": 7, "m_": 7, "pardoux": [7, 9], "2008": [7, 9], "freeli": 7, "indepen": 7, "w_n": 7, "test": 7, "relationship": 7, "modest": 7, "improv": 7, "draw_nt": 7, "1e5": 7, "draw_nt_sampl": 7, "sample_s": 7, "max_val": 7, "val": 7, "marker": 7, "\u03b8_val": 7, "n_val": 7, "\u03b8": 7, "zip": 7, "flatten": 7, "k_grid": 7, "binom_v": 7, "poisson_v": 7, "set_titl": 7, "tight_layout": 7, "translat": 8, "nonexplos": 8, "brief": 8, "summabl": 8, "identif": 8, "fp": 8, "fq": 8, "linopel": 8, "deduc": 8, "light": 8, "decompos": 8, "appliat": 8, "attent": 8, "ensur": 8, "built": 8, "admit": 8, "principl": 8, "awai": 8, "stai": 8, "forev": 8, "scenario": 8, "hope": 8, "hill": 8, "yoshida": 8, "omit": 8, "explos": 8, "tan": 8, "pi": 8, "quickli": 8, "induc": 8, "clearli": 8, "likewis": 8, "yet": 8, "choos": 8, "domin": 8, "sum_n": 8, "verif": 8, "mechan": 8, "essenti": 8, "app19": 9, "david": 9, "volum": 9, "93": 9, "cambridg": 9, "press": 9, "bob05": 9, "adam": 9, "how17": 9, "dougla": 9, "fe": 9, "lm94": 9, "andrzej": 9, "michael": 9, "chao": 9, "fractal": 9, "nois": 9, "aspect": 9, "97": 9, "springer": 9, "scienc": 9, "busi": 9, "media": 9, "lg16": 9, "jean": 9, "fran": 9, "\u00e7": 9, "oi": 9, "brownian": 9, "motion": 9, "martingal": 9, "calculu": 9, "274": 9, "lig10": 9, "milton": 9, "113": 9, "american": 9, "soc": 9, "nor98": 9, "jame": 9, "2": 9, "par08": 9, "etienn": 9, "network": 9, "genom": 9, "796": 9, "wilei": 9, "son": 9, "pichorrtkaminska12": 9, "katarzyna": 9, "ryszard": 9, "rudnicki": 9, "marta": 9, "tyran": 9, "kami": 9, "\u0144": 9, "ska": 9, "biolog": 9, "demonstratio": 9, "mathematica": 9, "45": 9, "463": 9, "494": 9, "sk11": 9, "prasanna": 9, "palaniappan": 9, "crc": 9, "sta09": 9, "mit": 9, "str13": 9, "daniel": 9, "230": 9, "wal12": 9, "odd": 9, "139": 9}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"stationar": 0, "ergod": 0, "overview": [0, 1, 3, 4, 5, 6, 7, 8], "stationari": [0, 7], "distribut": [0, 4, 5, 6], "definit": 0, "via": 0, "gener": [0, 1, 8], "irreduc": 0, "uniqu": [0, 3, 7], "asymptot": 0, "stabilitii": 0, "contract": 0, "strict": 0, "stabil": 0, "from": [0, 3, 4, 6, 8], "skeleton": 0, "drift": 0, "exercis": [0, 1, 3, 4, 5, 6, 7, 8], "solut": [0, 1, 3, 4, 5, 6, 7, 8], "8": [0, 1], "1": [0, 1, 3, 4, 5, 6, 7, 8], "2": [0, 1, 3, 4, 5, 6, 7, 8], "3": [0, 1, 3, 4, 5, 8], "semigroup": [1, 3, 5, 8], "motiv": [1, 3], "preliminari": 1, "The": [1, 3, 4, 5, 6, 7, 8], "space": [1, 4, 5], "linear": [1, 4], "oper": 1, "exponenti": [1, 3, 6, 7], "function": 1, "calculu": 1, "differenti": [1, 3], "curv": 1, "ar": 1, "uc": [1, 8], "A": [1, 5, 8], "character": [1, 6, 7], "uniformli": 1, "continu": [1, 2, 4, 5], "time": [2, 4, 5, 7], "markov": [2, 5, 8], "chain": [2, 3, 4, 5, 8], "kolmogorov": [3, 4], "backward": [3, 4], "equat": [3, 4], "state": [3, 5, 8], "depend": 3, "jump": [3, 4, 5, 7, 8], "intens": [3, 8], "algorithm": 3, "comput": 3, "an": 3, "integr": 3, "s": 3, "properti": [3, 5, 6, 7], "check": 3, "transit": [3, 5], "applic": 3, "inventori": [3, 5], "model": [3, 5], "4": [3, 5, 8], "forward": 4, "differ": 4, "od": 4, "review": 4, "discret": [4, 5], "case": [4, 5, 8], "shift": 4, "vector": 4, "vs": 4, "matrix": [4, 8], "valu": 4, "preserv": 4, "summari": 4, "5": [4, 8], "set": 5, "process": [5, 7], "finit": [5, 8], "joint": 5, "extend": 5, "infinit": 5, "countabl": 5, "canon": 5, "simul": [5, 8], "probabilist": 5, "construct": 5, "implic": 5, "exampl": 5, "failur": [5, 6], "restrict": 5, "impos": 5, "poisson": [5, 7], "dynam": 5, "represent": 5, "embed": 5, "constant": 5, "rate": 5, "flow": 5, "memoryless": 6, "geometr": 6, "sum": 6, "count": 7, "hold": 7, "independ": 7, "increment": 7, "restart": 7, "can": 7, "paus": 7, "notat": 8, "terminolog": 8, "necessari": 8, "suffici": 8, "condit": 8, "pair": 8, "decomposit": 8, "conserv": 8, "beyond": 8, "bound": 8, "matric": 8, "7": 8, "bibliographi": 9, "refer": 9}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})