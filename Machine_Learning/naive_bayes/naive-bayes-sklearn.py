from time import time
from matplotlib import pyplot as plt
from sklearn import datasets
from sklearn.naive_bayes import GaussianNB
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split

data = datasets.load_breast_cancer()

X = data.data
y = data.target
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

clf = GaussianNB()

time_to_train = time()

clf.fit(X_train, y_train)

print('Training time: ', round(time() - time_to_train, 3), "s")

prediction = clf.predict(X_test)
accuracy = accuracy_score(prediction, y_test)

print('Accuracy score: ', accuracy * 100, '%')

# Plot results
points = X_train

plt.figure()
colors = ['navy', 'darkorange']
point_size = 2
labels = ['True', 'False']

for i in range(len(labels)):
	plt.scatter(points[:, 3], points[:, 2], color=colors[i], label=labels[i])
# for color, i, label in zip(colors, [0, 1, 2], labels):
# 	print(i)
	# plt.scatter(points[:, 3], points[:, 2], color=color, alpha=.8, lw=point_size, label=label)

plt.legend(loc='best', shadow=False, scatterpoints=1)
plt.title('Naive Bayes Classification & Prediction')

# plt.show()
