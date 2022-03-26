from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *
from student_mgt_app.models import *




@api_view(['GET','POST'])
def student(request):
    if request.method == 'GET':
        students = Students.objects.all()
        serializer = StudentsSerializers(students, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = StudentsSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    return Response(serializer.data)

