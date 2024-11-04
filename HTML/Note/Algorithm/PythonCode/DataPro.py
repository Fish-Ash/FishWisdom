import pandas as pd


def data_read(path):
    if path.split('.')[1] == 'xlsx':
        return pd.read_excel(path)
    elif path.split('.')[1] == 'csv':
        return pd.read_csv(path)
    
def data_count(df, species, info=0):
    if info == 1:
        print(df[species].value_counts())
    return df[species].unique()

def data_shuffle(df):
    return df.sample(frac=1).reset_index(drop=True)

def data_or_label(df, label):
    return df.drop(label, axis=1), df[label]

def data_divide(df, ratio, species):
    temp = data_shuffle(df)
    return temp.loc[:len(df)*ratio/10,:].drop(species, axis=1), temp.loc[len(df)*ratio/10:, :].drop(species, axis=1)