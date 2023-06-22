from django.shortcuts import render
from django.contrib.auth.decorators import login_required
# Create your views here.

def index(request):
    return render(request, 'tienda/index.html')

@login_required
def carrito(request):
    return render(request, 'tienda/carrito.html')

def producto(request):
    return render(request, 'tienda/producto.html')

def acercade(request):
    return render(request, 'tienda/acercade.html')
@login_required
def perfil(request):
    return render(request, 'tienda/perfil.html')

def inicio_sesion(request):
    return render(request, 'tienda/registration/login.html')

def registro(request):
    return render(request, 'tienda/Registro.html')
