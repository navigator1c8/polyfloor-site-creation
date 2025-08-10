import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from '@/components/ui/icon';

export default function Reviews() {
  const [selectedRating, setSelectedRating] = useState<number>(0);

  const reviews = [
    {
      id: 1,
      name: "Александр Петров",
      company: "ООО 'Металлургический завод'",
      position: "Главный инженер",
      rating: 5,
      date: "2024-01-15",
      project: "Промышленные полы в цехе",
      area: "3000 м²",
      review: "Отличная работа! Покрытие выдерживает все нагрузки, которые мы на него даем. Химически стойкое, легко моется. Команда работала профессионально, соблюдали все сроки. Рекомендую!",
      avatar: "/img/ef3c4292-aa8f-4326-9b0f-2c4aecbfee15.jpg",
      verified: true
    },
    {
      id: 2,
      name: "Мария Сидорова",
      company: "ТЦ 'Европейский'",
      position: "Управляющий",
      rating: 5,
      date: "2024-01-10",
      project: "Декоративные полы в торговом центре",
      area: "1500 м²",
      review: "Превосходный результат! Полы получились очень красивые, с металлик-эффектом. Посетители постоянно восхищаются. Качество на высоте, никаких нареканий за полгода эксплуатации.",
      avatar: "/img/eefc34c5-1e9c-41de-9bf4-9fe681faa804.jpg",
      verified: true
    },
    {
      id: 3,
      name: "Дмитрий Козлов",
      company: "Частное лицо",
      position: "Владелец дома",
      rating: 4,
      date: "2024-01-08",
      project: "Наливные полы в доме",
      area: "200 м²",
      review: "В целом довольны результатом. Полы ровные, красивые. Единственное - немного затянулись сроки из-за погодных условий, но это не критично. Качество работ хорошее.",
      avatar: "/img/72f4b2bc-8448-4df2-bf59-959d09008849.jpg",
      verified: true
    },
    {
      id: 4,
      name: "Елена Волкова",
      company: "Медицинский центр 'Здоровье'",
      position: "Главврач",
      rating: 5,
      date: "2024-01-05",
      project: "Антибактериальные покрытия",
      area: "800 м²",
      review: "Идеально подходит для медицинского учреждения. Покрытие легко дезинфицируется, не впитывает запахи и жидкости. Соответствует всем санитарным требованиям. Очень довольны!",
      avatar: "/img/3af2a4ee-f64a-49a2-bf27-ce7fe23c5731.jpg",
      verified: true
    },
    {
      id: 5,
      name: "Сергей Иванов",
      company: "Автосервис 'Мотор'",
      position: "Владелец",
      rating: 5,
      date: "2024-01-03",
      project: "Полы в автосервисе",
      area: "600 м²",
      review: "Покрытие отлично выдерживает масла, бензин и другие автохимикаты. Легко убирается, не скользит. Работники довольны условиями. Цена соответствует качеству.",
      avatar: "/img/ef3c4292-aa8f-4326-9b0f-2c4aecbfee15.jpg",
      verified: true
    },
    {
      id: 6,
      name: "Анна Морозова",
      company: "Ресторан 'Вкус'",
      position: "Управляющий",
      rating: 4,
      date: "2023-12-28",
      project: "Полы в ресторане",
      area: "300 м²",
      review: "Хорошее покрытие для пищевого производства. Соответствует всем гигиеническим требованиям. Немного долго сохло, но результат стоил ожидания. Рекомендуем.",
      avatar: "/img/eefc34c5-1e9c-41de-9bf4-9fe681faa804.jpg",
      verified: true
    }
  ];

  const stats = [
    { label: "Средняя оценка", value: "4.8", icon: "Star" },
    { label: "Всего отзывов", value: "247", icon: "MessageSquare" },
    { label: "Рекомендуют", value: "96%", icon: "ThumbsUp" },
    { label: "Повторных клиентов", value: "78%", icon: "Repeat" }
  ];

  const ratingDistribution = [
    { stars: 5, count: 198, percentage: 80 },
    { stars: 4, count: 37, percentage: 15 },
    { stars: 3, count: 7, percentage: 3 },
    { stars: 2, count: 3, percentage: 1 },
    { stars: 1, count: 2, percentage: 1 }
  ];

  const renderStars = (rating: number, interactive: boolean = false) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Icon
            key={star}
            name="Star"
            className={`w-5 h-5 ${
              star <= rating 
                ? 'text-yellow-400 fill-current' 
                : 'text-gray-300'
            } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
            onClick={interactive ? () => setSelectedRating(star) : undefined}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Icon name="Layers" className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ShadePro</h1>
                <p className="text-xs text-gray-500">Полимерные покрытия</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Главная</a>
              <a href="/services" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Услуги</a>
              <a href="/reviews" className="text-blue-600 font-medium">Отзывы</a>
              <a href="/about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">О нас</a>
              <a href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Контакты</a>
            </nav>

            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">Отзывы клиентов</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Что говорят о нас{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                наши клиенты
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Честные отзывы от реальных клиентов о качестве наших работ 
              и уровне сервиса.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={stat.icon as any} className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Rating Distribution */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Распределение оценок</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {ratingDistribution.map((item) => (
                  <div key={item.stars} className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 w-20">
                      <span className="text-sm font-medium">{item.stars}</span>
                      <Icon name="Star" className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-gray-600 w-16">{item.count} отз.</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">Отзывы</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Отзывы наших клиентов
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <img 
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-gray-900">{review.name}</h3>
                        {review.verified && (
                          <Icon name="CheckCircle" className="w-4 h-4 text-green-600" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{review.position}</p>
                      <p className="text-sm text-gray-500">{review.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    {renderStars(review.rating)}
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-600">
                      <strong>Проект:</strong> {review.project}
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Площадь:</strong> {review.area}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">{review.review}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <Button variant="outline" size="sm">
                      <Icon name="ThumbsUp" className="w-4 h-4 mr-2" />
                      Полезно
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Icon name="Share" className="w-4 h-4 mr-2" />
                      Поделиться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <Icon name="Plus" className="w-4 h-4 mr-2" />
              Показать еще отзывы
            </Button>
          </div>
        </div>
      </section>

      {/* Leave Review */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge className="bg-blue-100 text-blue-800 border-blue-200">Оставить отзыв</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Поделитесь своим опытом
              </h2>
              <p className="text-xl text-gray-600">
                Ваш отзыв поможет другим клиентам сделать правильный выбор
              </p>
            </div>

            <Card className="shadow-xl">
              <CardContent className="p-8 space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Имя *</label>
                    <Input placeholder="Ваше имя" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Компания</label>
                    <Input placeholder="Название компании" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <Input type="email" placeholder="your@email.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                    <Input type="tel" placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Тип проекта</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип проекта" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="industrial">Промышленные полы</SelectItem>
                      <SelectItem value="commercial">Коммерческие полы</SelectItem>
                      <SelectItem value="residential">Жилые полы</SelectItem>
                      <SelectItem value="decorative">Декоративные покрытия</SelectItem>
                      <SelectItem value="other">Другое</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Оценка *</label>
                  <div className="flex items-center space-x-2">
                    {renderStars(selectedRating, true)}
                    <span className="text-sm text-gray-600 ml-4">
                      {selectedRating > 0 ? `${selectedRating} из 5` : 'Выберите оценку'}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Отзыв *</label>
                  <Textarea 
                    rows={5}
                    placeholder="Расскажите о своем опыте работы с нами..."
                    required
                  />
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg"
                  disabled={selectedRating === 0}
                >
                  <Icon name="Send" className="w-5 h-5 mr-2" />
                  Отправить отзыв
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Отзыв будет опубликован после модерации
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}