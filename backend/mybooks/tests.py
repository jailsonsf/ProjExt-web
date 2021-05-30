from django.test import TestCase
from django.test import Client
from django.urls import reverse_lazy
from django.contrib.auth import get_user_model

from .models import Book

User = get_user_model()


class BookRouteTest(TestCase):
    def setUp(self):
        self.client = Client()
        self.user = User.objects.create(username='teste', password='teste',
                                        email='teste@mail.com')

    def tearDown(self):
        pass

    def test_list_books(self):
        url = reverse_lazy('book-list')

        response = self.client.get(url)

        self.assertEqual(response.json(), [])

    def test_create_book_sucess(self):
        data = {
            'user': self.user.id,
            'title': 'Django Test',
            'description': 'Estudando sobre testes com django'
        }
        url = reverse_lazy('book-list')

        response = self.client.post(url, data=data)

        self.assertEqual(response.status_code, 201)
