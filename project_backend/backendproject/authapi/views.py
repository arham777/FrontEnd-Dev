# from django.shortcuts import render
# from rest_framework import generics
# from authapi.serializers import SignUpSerializer
# from django.contrib.auth.models import User
# # Create your views here.

# class SignUpView(generics.CreateAPIView):
#   queryset = User.objects.all() 
#   serializer_class = SignUpSerializer


# class SigninView(generics.CreateAPIView):
#   queryset = User.objects.all()
#   serializer_class = SignUpSerializer


from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status,generics
from rest_framework_simplejwt.tokens import RefreshToken
from authapi.serializers import SignUpSerializer, SignInSerializer
from django.contrib.auth.models import User

class SignUpView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = SignUpSerializer


class SigninView(APIView):
    serializer_class = SignInSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        username = serializer.validated_data['username']
        password = serializer.validated_data['password']
        user = authenticate(username=username, password=password)

        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid username or password'}, status=status.HTTP_401_UNAUTHORIZED)
