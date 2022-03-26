from pyexpat.errors import messages
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *
from student_mgt_app.models import *

# Create your views here.
@api_view(['GET'])
def getRoutes(request):

    routes=[
        {'GET': '/api/projects'}
    ]

    return Response(routes)



@api_view(['GET'])
def staff(request):
    staff=Staffs.objects.all()
    serializer=StaffsSerializers(staff,many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getStaff(request,pk):
    staff=Staffs.objects.get(id=pk)
    serializer=StaffsSerializers(staff,many=False)
    return Response(serializer.data)


@api_view(['GET'])
def subject(request):
    _subject=Subjects.objects.all()
    serializer=SubjectsSerializers(_subject,many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getSubjects(request,pk):
    subject=Subjects.objects.get(id=pk)
    serializer=StaffsSerializers(subject,many=False)
    return Response(serializer.data)
  

@api_view(['GET'])
def attendance(request):
    _attendance=Attendance.objects.all()
    serializer=AttendanceSerializers(_attendance,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def list_courses(request):
    _courses=Courses.objects.all()
    serializer=CoursesSerializers(_courses,many=True)
    return Response(serializer.data)
    
@api_view(['GET'])
def courses(request,pk):
    _courses=Courses.objects.get(id=pk)
    serializer=CoursesSerializers(_courses,many=False)
    return Response(serializer.data)

@api_view(['POST'])
def createCourses(request):
    if request.method == 'POST':
        student=Courses.objects.create(
            course_name="name"
        )
        serializer = CoursesSerializers(student,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    return Response(serializer.data)



@api_view(['POST'])
def add_staff_save(request):
    if request.method!="POST":
        return HttpResponse("Method Not Allowed")
    else:
        first_name=request.POST.get("first_name")
        last_name=request.POST.get("last_name")
        username=request.POST.get("username")
        email=request.POST.get("email")
        password=request.POST.get("password")
        address=request.POST.get("address")
        try:
            user=CustomUser.objects.create_user(username=username,password=password,email=email,last_name=last_name,first_name=first_name,user_type=2)
            user.staffs.address=address
            serializer=CustomUserSerializers(user,data=request.dat)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            messages.success(request,"Successfully Added Staff")
            return Response("done")
        except:
            return Response(serializer.data,"let see")



@api_view(['GET'])
def getAttendanceReport(request,pk):
    attendance_report=Attendance_Report.objects.get(id=pk)
    serializer=Attendance_ReportSerializers(attendance_report,many=False)
    return Response(serializer.data)
  
