import numpy as np
import matplotlib.pyplot as plt
from matplotlib import colors
from sklearn import datasets
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis

iris = datasets.load_iris()

X = iris.data
y = iris.target
target_names = iris.target_names

# print(X, y)

lda = LinearDiscriminantAnalysis(n_components=2)
lda.fit(X, y)
drX = lda.transform(X)

plt.figure()
colors = ['navy', 'turquoise', 'darkorange']
point_size = 2

for color, i, label in zip(colors, [0, 1, 2], target_names):
    plt.scatter(drX[y == i, 0], drX[y == i, 1], color=color, alpha=.8, lw=point_size,
                label=label)
plt.legend(loc='best', shadow=False, scatterpoints=1)
plt.title('LinearDiscriminantAnalysis of IRIS dataset')

plt.show()