from django.urls import path, include
from comment import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.post_comments),
    path('<str:video_id>', views.get_video_comments),
]