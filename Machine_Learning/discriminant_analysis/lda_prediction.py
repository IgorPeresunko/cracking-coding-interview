import numpy as np
import pandas as pd
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report

data = pd.read_csv('iris.csv')

X, y = data.drop('species', axis=1), data['species']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
print("\nX_train:\n")
print(X_train.head())
print("\nX_test:\n")
print(X_test.head())


clf = LinearDiscriminantAnalysis()

clf.fit(X_train, y_train)

test_predictions = clf.predict(X_test)

test_answers = np.array(y_test)

# for i in range(len(test_predictions)):
# 	if (test_predictions[i] == test_answers[i]):
# 		print('yeah')
# 	else:
# 		print('fuck')

result = classification_report(test_answers, test_predictions)
print(result)