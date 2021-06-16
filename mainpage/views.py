from mainpage.models import Category, Price
from django.shortcuts import render, redirect
from .forms import FeedbackCommitteeForm, FeedbackPhoneForm
from django.core.mail import send_mail
from django.conf import settings
from django.contrib import messages

def main(request):
  prices = Price.objects.all()
  if request.method == "POST":
    form = FeedbackCommitteeForm(request.POST)
    if form.is_valid():
      name = form.cleaned_data.get('name')
      email = form.cleaned_data.get('email')
      feedback = form.save()
      num = feedback.number
      
      messages.success(request, f'Спасибо за оставленную заявку #{num}, {name}!')
      return redirect('home')
  else:
    form = FeedbackCommitteeForm()
  
  if request.method == "POST":
    phone_form = FeedbackPhoneForm(request.POST)
    if phone_form.is_valid():
      name = phone_form.cleaned_data.get('name')
      phone = phone_form.cleaned_data.get('phone')
      
      feedback = phone_form.save()
      num = feedback.number
      messages.success(request, f'Спасибо за оставленную заявку #{num}, {name}!')
      return redirect('home')
  else:
    phone_form = FeedbackPhoneForm()

  context = {
    'form': form,
    'phone_form': phone_form,
    'prices': prices,
  }

  return render(request, "mainpage/index.html", context)