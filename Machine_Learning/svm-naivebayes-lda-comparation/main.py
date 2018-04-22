from time import time
from sklearn import datasets
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis
from sklearn.naive_bayes import GaussianNB
from sklearn.svm import SVC

iris = datasets.load_iris()

X_train, X_test, y_train, y_test = train_test_split(iris.data, iris.target, test_size=0.2)

def train_model(clf, model_name):
	train_time = time()

	clf.fit(X_train, y_train)
	prediction = clf.predict(X_test)
	accuracy = accuracy_score(prediction, y_test)

	printResults(train_time, accuracy, model_name)


def printResults(t, acc, method_name):
	print('\n^_', method_name, '_^')
	print('Training time is ', round(time() - t, 3), 's')
	print('Accuracy is ', acc * 100, '%')

clf = LinearDiscriminantAnalysis()
train_model(clf, 'Linear Discriminant Analysis')

clf = GaussianNB()
train_model(clf, 'Naive Bayes')

clf = SVC()
train_model(clf, 'Support Vector Machines')