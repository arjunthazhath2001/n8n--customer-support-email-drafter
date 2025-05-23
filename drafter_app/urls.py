from django.urls import path,include
from .views import HandleDraft

urlpatterns = [
    path('email-hook/', HandleDraft.as_view()),
    path('get-draft/', HandleDraft.as_view())
]
