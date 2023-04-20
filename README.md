# react_01
https://gustavomoscovich.github.io/react_01/

Proyecto Entrega Final 
Curso React 
Gustavo Moscovich
-----------------------------------------------------

El proyecto entregado como trabajo final se basa en una reproducción de funcionamiento de un 
sitio de Ecommerce. 

La estructura del proyecto en cuanto a sus funcionalidades se encuentra definida dentro de la
carpeta src y dentro de dicha carpeta los archivos con código React se encuentran distribuidos
según su uso o función en las carpetas "components", "context" y "pages"

El proyecto se encuentra relacionado con el repositorio de datos Firestore Database provisto como servicio
por la plataforma Firebase de Google.


Firebase

En el repositorio Firesotre Database se van a encontrar tres colecciones que son utilizadas por este proyecto.
    *) productos:   tiene almacenada la lista de productos que interactúan con el proyecto para la visualización
                    y operación sobre los mismos en distintas páginas y operaciones.
    
    *) orderscab:   almacena la información cada vez que se completa un proceso de compra. En esta colección lo que
                    se guarda son los datos del cliente y datos adicionales de la operación como son la fecha de
                    realización, estado e importe total de la compra.

    *) ordersdet:   almacena la información a nivel de productos de la compra realizada. Cada grupo de productos que
                    componen el detalle de una compra se almacenan bajo el mismo ID que tiene la cabecera almacenada 
                    en la colección orderscab. O sea que el ID de la cabecera es la clave con lo que se puede recuperar
                    el detalle completo de una determinada compra.


Contextos

El proyecto tiene defindo dos contextos (almacenados en la carpeta context) que son los encargados de brindar funciones y/o
información de forma global al resto de los componentes y/o páginas que componen la solución.

    *) context ContextProd: brinda funciones y/o estados relacionados a los productos a ser operados por la solución.
                            Los productos se toman de la colección "productos" almacenada en Firestore.
                            las funciones y estados provistos por este context son:
                                *) listaProducts:   retorna el conjunto de productos según filtro de marca (brand) que recibe
                                                    como parámetro.
                                                    Si no se especifica algún brand como parámetro devuelve la lista completa
                                                    de productos.

                                *) products:    devuelve el estado de productos según filtro aplicado en la última llamada
                                                a la función listaProducts

    *) context ContextCart: brinda funciones y/o estados relacionados a la operatoria del carrito de compras
                            Las funciones y estados provstos por este context son:
                                *) deleteAllCart:   Función que elimina todos los productos del carrito
                                *) deleteProductCart: Función que elimina un producto específico del carrito
                                *) productInCart: Función que indica si un determinado producto ya existe en el carrito
                                *) addProductCart: Función que va agregando productos en el carrito. Tiene detección de
                                                    existencia previa de un producto, en cuyo caso suma las unidades de
                                                    compra del mismo
                                *) totalUnidCart: Estado que decontiene el total de unidades del carrito.
                                *) cartproducts: Estado que contiene la lista de productos del carrito.

---------------
Uso de Marca en lugar de Categorías.
En la solución utilizo Marca (brand) en lugar de Categorías (category) para segmentar el set de productos a recuperar
de Firestore ya que el uso de brand tiene mas sentido en relación a los productos que estoy tratando en el proyecto.

---------------
Librerias

@mui/material
La aplico en todo el proyecto usando sus componentes para el desarrollo UI de la solución dado la facilidad de uso e integración
que tiene con React.

@mui/icons-material
Hago uso de íconos provistos por MUI

react-router-dom
Aplicado para todo el ruteo

firebase/app y firebase/firestore
Integración con servicio Firebase de Google y acceso a Firestore Database

react-toastify
Utilizo esta librería para brindar una interfaz de mensajería al usuario dinámica y con buen efecto.
Se usa la misma para informar cuando se agregan o borran productos del carrito y/o cuando se cierra el proceso
de compra informando al usuario de ello y mostrando el ID de la compra.

---------------

Agregado de productos al carrito.
Los productos se pueden agregar al carrito tanto desde la grilla como desde la visualización del detalle del mismo.
Tanto en la grilla de productos como en la vista de detalle se puede informar la cantidad de unidades que se desean comprar.
Para que el producto se agregue al carrito se debe usar el botón "Lo Quiero".
Si se hace uso del botón "Lo Quiero" sin informar unidades se asume que es 1

Cada vez que se agregan o quitan productos en el carrito se incrementa o decrementa el contador de unidades que se muestra
junto al ícono del cart ubicado en la barra de navegación.

Para acceder a la visualización del carrito solo se debe selecciónar el ícono del mismo en la barra de navegación (CartIcon.js)

---------------
Cierre del proceso de compra (Cart.js)

El cierre del proceso de compra se realiza por medio del botón "Confirmar Compra" que se encuentra en la vista del carrito.

El botón "Confirmar Compra" solo se habilitará si se cumplen todas estas condiciones:

    *) Que el carrito tenga por lo menos 1 unidad
    *) Que se encuentren cargados todos los datos solicitados al usuario
    *) Que coincidan las direcciones de Email informada en los campos destinados al efecto

Durante el proceso de cierre de compra se procede a:
    *) Grabar los datos de "cabecera" de la compra en orderscab de Firestore
    *) Se recupera el ID del alta realizada en orderscab
    *) Se graban los artículos del carrito como "detalle" de la compra en ordersdet de Firestore usando el ID recuperado del alta de la cabecera
    *) Se borran todos los artículos del carrito
    *) Se borran todos los campos del formulario de datos del cliente
    *) Se notifica al usuario sobre la generación de la compra usando react-toastify y mostrando el ID de la misma
    *) Se redirecciona de forma automática al Home

