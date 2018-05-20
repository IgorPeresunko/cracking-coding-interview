from scipy import stats
import scipy
import numpy as np
import random
import matplotlib.mlab as mlab
import matplotlib.pyplot as plt
import pylab


# 0. Generate data
data_size = 50
data = np.array([13.0, 13.1, 13.0, 12.5, 12.8, 12.3, 12.1, 12.2, 12.1, 12.7, 12.0, 12.6, 12.8, 12.5, 13.1, 13.2, 12.6, 12.4, 13.0, 12.9, 13.2])

# 1. Sort it
series = np.sort(data)

# 2. Basic data
s_max = np.amax(series)
s_min = np.amin(series)
series_range = s_max - s_min

# 3. Mode, median, mean
mode = stats.mode(series)[0][0]
median = np.median(series)
mean = np.mean(series)

# 4. Var, std
s_var = np.var(series, ddof=1)
s_std = np.std(series, ddof=1)

# 5. Draw it

values, base = np.histogram(series, bins=40)
cumulative = np.cumsum(values)

plt.plot(base[:-1], cumulative, c='blue')
plt.plot(base[:-1], len(data)-cumulative, c='green')

plt.grid(True)
plt.figure()

n, bins, patches = plt.hist(series, 50, normed=1, facecolor='green', alpha=0.75)

plt.xlabel('Values')
plt.ylabel('Probability')
plt.title(r'Histogram')
plt.axis([s_min, s_max, 0, 7])
plt.grid(True)


plt.show()