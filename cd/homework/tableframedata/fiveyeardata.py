import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt

data = pd.read_csv('gapminder-FiveYearData.csv')
map1_plot = pd.pivot_table(data, index=['continent'], values=['lifeExp'], columns=['year'])

ax = sns.heatmap(map1_plot, annot=True,linewidths=0.5)
sna.get_firgure().savefig('myfig.png')
