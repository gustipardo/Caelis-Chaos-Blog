
Sistema de control de versiones, para acceder a todas las versiones de nuestro programa.

==Rollback== es volver a una versión anterior.

Git trabaja de forma descentralizada, cada desarrollador tiene una copia del proyecto.
![[Pasted image 20230714190240.png]]
# Usos de GIT
- historial
- Almacenar código
- Trabajar en equipo
- Cuando se introdujo un error

Nosotros no usaremos un interfaz gráfica, solo usaremos la terminal como es común.

No utilizar la terminal de Windows, utilizar Git BASH
Mostar la versión de git:
`git --version`

Configurar Git de manera global:
``git config --global user.name "Gustavo Alvarez"``

``git config --global user.emil gusm2003@gmail.com

VS editor de texto por defecto:
`git config --global core.editor "code --wait"`
Ver archivo de config global
`git config --global -e`


En Windows el salto de lineal es muestra como
Carriage Return CR
Line Feed LF

De esta forma podemos configurar como git trata los saltos de línea.

![[Pasted image 20230714191941.png]]

Mostrar todas las posibles configuraciones:
![[Pasted image 20230714192002.png]]

Limpiar Terminal:
==Control + L==
# Comandos de Bash
Mostrar los directorios con `ls`
![[Pasted image 20230714192352.png]]

Saber en que carpeta estamos apuntando:
![[Pasted image 20230714192421.png]]

Movernos entre carpetas 
![[Pasted image 20230714192541.png]]

Si quiero ir un directorio atrás:
![[Pasted image 20230714192636.png]]

Crear nuevo Directorio: `mkdir nombre`
![[Pasted image 20230714192827.png]]

## Inicializar Repo

![[Pasted image 20230714193012.png]]

Este directorio de git esta oculto
![[Pasted image 20230714193052.png]]
para verlo:
![[Pasted image 20230714193109.png]]

Entramos al directorio cd .git
Archivos que usa Git para guardar nuestras versiones:
![[Pasted image 20230714193221.png]]

Cabe aclarar que .git nunca se sube a github es ignorada.

Abrir VS dentro de la carpeta a la que estamos apuntando
![[Pasted image 20230715123722.png]]
![[Pasted image 20230715123726.png]]

Mostrar el estado actual del repositorio:
![[Pasted image 20230715123843.png]]

Utilizamos git add para seleccionar los archivos que queremos agregar al repo.
`git add * .txt` agrega todos los txt
`git add * .` agrega todos los archivos, mala práctica.

Podemos ver la etapa de stage y la de commits
![[Pasted image 20230715124147.png]]

Agregas mas de un archivo a la vez:
![[Pasted image 20230715124313.png]]

Hacer un commit
![[Pasted image 20230715124653.png]]

Ya no hay archivos en el stage


![[Pasted image 20230715124852.png]]

Eliminar archivo 
![[Pasted image 20230715124929.png]]
![[Pasted image 20230715124940.png]]
![[Pasted image 20230715125025.png]]

Ahorrarse un comando:
Eliminar el archivo y enviarlo a stage de una
![[Pasted image 20230715125135.png]]

Quitar el archivo/modificación de la etapa de stage
![[Pasted image 20230715125304.png]]

Para recuperar archivo de stage
![[Pasted image 20230715125356.png]]

Modificar el nombre de un archivo:
![[Pasted image 20230715125456.png]]

Llevar el cambio a el stage:
![[Pasted image 20230715125608.png]]
![[Pasted image 20230715125633.png]]

Comando que cambia el nombre y lo envia al stage de una:

![[Pasted image 20230715125723.png]]

### Ignorar archivos:
![[Pasted image 20230715125932.png]]
![[Pasted image 20230715125947.png]]
Creamos archivo .gitignore
![[Pasted image 20230715130032.png]]

![[Pasted image 20230715130112.png]]
Ya no esta el .env

Alternativa a git status mas simple:
![[Pasted image 20230715130415.png]]
M verde Esta en el stage
M rojo Hace sido modificado
?? Git no le hace seguimiento al archivo

![[Pasted image 20230715130837.png]]
A verde acaba de ser agregado

Ver todos los cambios que hemos realizado:
![[Pasted image 20230715131042.png]]
Los números en cian son el numero de lineas

Ver los cambios en el staged:
![[Pasted image 20230715131240.png]]

Ver historial de cambios:
![[Pasted image 20230715131346.png]]
Mostrarlo mas resumido:
![[Pasted image 20230715131411.png]]
el primer código es el identificador del commit.

## Branch
Crear una rama y solicitar merch a el main.
![[Pasted image 20230715131613.png]]

Saben en que ramas estamos trabajando:
![[Pasted image 20230715131735.png]]

Crear una rama
![[Pasted image 20230715131830.png]]
![[Pasted image 20230715131839.png]]

![[Pasted image 20230715131956.png]]

Mostrar el contenido de un archivo:
![[Pasted image 20230715132049.png]]

Hay diferencias entre el branch y el main


Estando en el la rama Main podemos hacer el merge
![[Pasted image 20230715132214.png]]

## Github
Creamos un repositorio en github y compiamos la linea de 
![[Pasted image 20230715132404.png]]
`git remote add origin https://github.com/gustipardo/miweb.git`
Esto es para indicar de donde obtenemos el código y donde subimos lo cambios.

Utilizamos la otra linea para agregar los cambios a la nube y crear un rama main en GitHub
![[Pasted image 20230715132832.png]]
`git push -u origin main`
main o master
![[Pasted image 20230715132954.png]]
![[Pasted image 20230715133004.png]]


Para agregar una rama al repositorio:
![[Pasted image 20230715133323.png]]