from django.shortcuts import render
from django.contrib import messages
from django.contrib.auth import login,logout
from django.http import HttpResponse, HttpResponseRedirect
from api import EmailBackEnd
from .serializers import *
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def doLogin(request):
    if request.method!="POST":
        return HttpResponse("<h2>Method Not Allowed</h2>")
    else:
        # captcha_token=request.POST.get("g-recaptcha-response")
        # cap_url="https://www.google.com/recaptcha/api/siteverify"
        # cap_secret="6LeWtqUZAAAAANlv3se4uw5WAg-p0X61CJjHPxKT"
        # cap_data={"secret":cap_secret,"response":captcha_token}
        # cap_server_response=requests.post(url=cap_url,data=cap_data)
        # cap_json=json.loads(cap_server_response.text)

        # if cap_json['success']==False:
        #     messages.error(request,"Invalid Captcha Try Again")
        #     return HttpResponseRedirect("/")

        user=EmailBackEnd.authenticate(request,username=request.POST.get("email"),password=request.POST.get("password"))
        if user!=None:
            login(request,user,backend=None)
            
            if user.user_type=="1":
                
                serializer=CustomUserSerializers(user.user_type)
                return Response(serializer.data)
            elif user.user_type=="2":
                serializer=CustomUserSerializers(user.user_type)
                return Response(serializer.data)
            else:
                return Response(serializer.data)
        else:
            messages.error(request,"Invalid Login Details")
            # return HttpResponseRedirect("/")

@api_view(['POST'])
def student_signup(request):
    # user=EmailBackEnd.authenticate(request,username=request.POST.get("email"),password=request.POST.get("password"))
    if request.method=='POST':
        user=CustomUserSerializers(

        )




@api_view(['POST'])
def GetUserDetails(request):
    user=request.user
    serializer=CustomUserSerializers(user)
  
    
    return Response(serializer.data)
    

def logout_user(request):
    logout(request)
    return HttpResponseRedirect("/")