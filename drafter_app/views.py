from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.


class HandleDraft(APIView):
    def __init__(self):    
        self.message=""
        self.draftId=""
        self.summary=""
        self.mail=""
        
    def post(self,request):
        self.message=request.data["message"]
        self.draftId= request.data["draftId"]
        self.summary= request.data["summary"]
        self.mail= request.data["mail"]
        return Response({"message":"ok"})
    
    def get(self,request):
        if self.message!="" and self.draftId!="" and self.summary!="":
            return Response({
                "message": self.message,
                "draftId": self.draftId,
                "summary": self.summary
            })
        return Response({"message":"wait"})