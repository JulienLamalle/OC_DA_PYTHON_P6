# Project 6 (Julien Lamalle)

### For this project we implemented the front-end for an API to display the best movies by rating or by category


To clone this folder, execute the following command: 


```
git clone git@github.com:JulienLamalle/OC_DA_PYTHON_P6.git
```

From your terminal you can enter the file as follows: 


```
cd OC-DA-PYTHON_P6
```

For simplicity the api is provided in the project, you can access his file by running the following command : 


```
cd OCMovies-API-EN-FR
```


To avoid conflicts with potential existing project, after entering the api folder, I strongly recommend that you create a virtual environment for this project using this command:


```
python -m venv env
```

Then you have to activate your environment:


```
source env/bin/activate
```


You now need to install all the libraries necessary for this program to work properly, for this you can run the following command: 


```
pip install -r requirements.txt
```

You can now fill the database: 


```
python manage.py create_db
```

Then start the API: 


```
python manage.py runserver
```

You can now access the front-end application from the `index.html` file located in the OCMovies-FRONT folder


