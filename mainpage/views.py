from mainpage.models import Category
from django.shortcuts import render, redirect
from .forms import FeedbackCommitteeForm, FeedbackStudyForm, FeedbackPriceForm, FeedbackCourseForm, FeedbackDayForm
from django.core.mail import send_mail
from django.conf import settings
from django.contrib import messages

def main(request):
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
    study_form = FeedbackStudyForm(request.POST)
    if study_form.is_valid():
      name = study_form.cleaned_data.get('name')
      email = study_form.cleaned_data.get('email')
      
      feedback = study_form.save()
      num = feedback.number
      messages.success(request, f'Спасибо за оставленную заявку #{num}, {name}!')
      return redirect('home')
  else:
    study_form = FeedbackStudyForm()


  if request.method == "POST":
    price_form = FeedbackPriceForm(request.POST)
    if price_form.is_valid():
      name = price_form.cleaned_data.get('name')
      email = price_form.cleaned_data.get('email')
      
      feedback = price_form.save()
      num = feedback.number
      messages.success(request, f'Спасибо за оставленную заявку #{num}, {name}!')
      return redirect('home')
  else:
    price_form = FeedbackPriceForm()

  if request.method == "POST":
    course_form = FeedbackCourseForm(request.POST)
    if course_form.is_valid():
      name = course_form.cleaned_data.get('name')
      email = course_form.cleaned_data.get('email')
      
      feedback = course_form.save()
      num = feedback.number
      messages.success(request, f'Спасибо за оставленную заявку #{num}, {name}!')
      return redirect('home')
  else:
    course_form = FeedbackCourseForm()

  if request.method == "POST":
    day_form = FeedbackDayForm(request.POST)
    if day_form.is_valid():
      name = day_form.cleaned_data.get('name')
      email = day_form.cleaned_data.get('email')
      
      feedback = day_form.save()
      num = feedback.number
      messages.success(request, f'Спасибо за оставленную заявку #{num}, {name}!')
      return redirect('home')
  else:
    day_form = FeedbackDayForm()

  context = {
    'form': form,
    'study_form': study_form,
    'price_form': price_form,
    'course_form': course_form,
    'day_form': day_form,

  }

  return render(request, "mainpage/index.html", context)