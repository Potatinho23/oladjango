from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name="index"),
    path('carrito/', views.carrito, name="carrito"),
    path('producto/', views.producto, name="producto"),
    path('acercade/', views.acercade, name="acercade"),
    path('login/', views.inicio_sesion, name="login"),
    path('perfil/', views.perfil, name="perfil"),
    path('Registro/', views.registro, name="registro"),
]
