import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Icon from '@/components/ui/icon';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      category: "Общие вопросы",
      icon: "HelpCircle",
      questions: [
        {
          question: "Что такое полимерные покрытия для пола?",
          answer: "Полимерные покрытия - это современные материалы на основе эпоксидных, полиуретановых или других полимерных смол, которые создают прочное, долговечное и эстетичное покрытие пола. Они обладают высокой износостойкостью, химической стойкостью и могут иметь различные декоративные эффекты."
        },
        {
          question: "Какие преимущества у полимерных полов?",
          answer: "Основные преимущества: высокая прочность и износостойкость, химическая стойкость, легкость в уходе, гигиеничность, отсутствие швов, широкие декоративные возможности, долговечность (до 20-25 лет), возможность ремонта и обновления."
        },
        {
          question: "Где применяются полимерные покрытия?",
          answer: "Полимерные покрытия используются в промышленности (заводы, склады), коммерческих помещениях (торговые центры, офисы), медицинских учреждениях, пищевой промышленности, гаражах, жилых помещениях, спортивных объектах."
        }
      ]
    },
    {
      category: "Технические вопросы",
      icon: "Settings",
      questions: [
        {
          question: "Какая толщина полимерного покрытия?",
          answer: "Толщина зависит от типа покрытия и условий эксплуатации: тонкослойные покрытия - 0.2-1 мм, среднеслойные - 1-3 мм, толстослойные - 3-10 мм, высоконаполненные - до 15 мм. Выбор толщины определяется нагрузками и требованиями к покрытию."
        },
        {
          question: "При какой температуре можно укладывать покрытие?",
          answer: "Оптимальная температура для укладки: +15°C до +25°C при относительной влажности не более 80%. При других условиях возможны корректировки технологии. Температура основания должна быть на 3°C выше точки росы."
        },
        {
          question: "Сколько времени сохнет полимерное покрытие?",
          answer: "Время полимеризации зависит от типа материала: эпоксидные - 12-24 часа до хождения, 7 дней до полной нагрузки; полиуретановые - 6-12 часов до хождения, 3-5 дней до полной нагрузки. Точные сроки зависят от температуры и влажности."
        }
      ]
    },
    {
      category: "Стоимость и сроки",
      icon: "DollarSign",
      questions: [
        {
          question: "Сколько стоит полимерное покрытие?",
          answer: "Стоимость зависит от типа покрытия, толщины, площади и сложности работ: эпоксидные покрытия - от 800 до 2500 ₽/м², полиуретановые - от 600 до 2000 ₽/м², наливные полы - от 400 до 1500 ₽/м². Точная цена определяется после осмотра объекта."
        },
        {
          question: "Сколько времени занимает укладка?",
          answer: "Сроки зависят от площади и типа покрытия: подготовка основания - 1-3 дня, нанесение покрытия - 1-2 дня, полимеризация - 3-7 дней. Для объекта 500 м² общий срок составляет 7-14 дней с учетом технологических перерывов."
        },
        {
          question: "Что влияет на итоговую стоимость?",
          answer: "На стоимость влияют: тип и качество материалов, толщина покрытия, состояние основания, площадь объекта, сложность геометрии, декоративные элементы, срочность выполнения, удаленность объекта, дополнительные услуги."
        }
      ]
    },
    {
      category: "Уход и эксплуатация",
      icon: "Wrench",
      questions: [
        {
          question: "Как ухаживать за полимерным покрытием?",
          answer: "Регулярная влажная уборка с нейтральными моющими средствами, избегание абразивных материалов, своевременное удаление пятен, периодическая полировка (для глянцевых покрытий), защита от механических повреждений острыми предметами."
        },
        {
          question: "Можно ли ремонтировать полимерные полы?",
          answer: "Да, большинство дефектов можно устранить: локальные повреждения ремонтируются шпатлевкой и перекрытием, потертости устраняются шлифовкой и нанесением нового слоя, трещины заделываются специальными составами. Стоимость ремонта значительно ниже полной замены."
        },
        {
          question: "Какой срок службы полимерных покрытий?",
          answer: "При правильной эксплуатации: промышленные покрытия - 15-25 лет, коммерческие - 10-20 лет, декоративные - 10-15 лет. Срок службы зависит от качества материалов, соблюдения технологии укладки и условий эксплуатации."
        }
      ]
    },
    {
      category: "Гарантии и сервис",
      icon: "Shield",
      questions: [
        {
          question: "Какая гарантия на полимерные покрытия?",
          answer: "Стандартная гарантия - 5-10 лет, расширенная - до 20 лет. Гарантия покрывает дефекты материалов и нарушения технологии укладки. Не покрывается: механические повреждения, превышение нагрузок, нарушение правил эксплуатации."
        },
        {
          question: "Что делать при появлении дефектов?",
          answer: "При обнаружении дефектов обращайтесь в гарантийную службу. Выезд специалиста в течение 24 часов, диагностика причин, бесплатное устранение гарантийных случаев. Ведется фото-фиксация и составляется акт выполненных работ."
        },
        {
          question: "Предоставляете ли техническое обслуживание?",
          answer: "Да, предлагаем договоры технического обслуживания: регулярные осмотры, профилактические работы, консультации по эксплуатации, приоритетное обслуживание, скидки на материалы и работы, продление гарантии."
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

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
              <a href="/faq" className="text-blue-600 font-medium">FAQ</a>
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
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">Часто задаваемые вопросы</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Ответы на{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                популярные вопросы
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Собрали самые частые вопросы о полимерных покрытиях, 
              технологиях укладки и обслуживании.
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Icon name="Search" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Поиск по вопросам и ответам..."
                className="pl-12 h-12 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {filteredCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Icon name={category.icon as any} className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
                  <Badge variant="secondary">{category.questions.length}</Badge>
                </div>

                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex;
                    const isOpen = openItems.includes(globalIndex);
                    
                    return (
                      <Card key={faqIndex} className="hover:shadow-lg transition-shadow">
                        <Collapsible>
                          <CollapsibleTrigger 
                            className="w-full"
                            onClick={() => toggleItem(globalIndex)}
                          >
                            <CardHeader className="text-left">
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-lg">{faq.question}</CardTitle>
                                <Icon 
                                  name={isOpen ? "ChevronUp" : "ChevronDown"} 
                                  className="w-5 h-5 text-gray-500 transition-transform" 
                                />
                              </div>
                            </CardHeader>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <CardContent className="pt-0">
                              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </CardContent>
                          </CollapsibleContent>
                        </Collapsible>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Search" className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ничего не найдено</h3>
              <p className="text-gray-600">Попробуйте изменить поисковый запрос</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge className="bg-blue-100 text-blue-800 border-blue-200">Нужна помощь?</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Не нашли ответ на свой вопрос?
              </h2>
              <p className="text-xl text-gray-600">
                Свяжитесь с нашими специалистами для получения персональной консультации
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>Телефон</CardTitle>
                  <CardDescription>Звоните в любое время</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-lg mb-2">+7 (800) 800-80-80</p>
                  <p className="text-sm text-gray-600 mb-4">Бесплатно по России</p>
                  <Button className="w-full">Позвонить</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Mail" className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>Email</CardTitle>
                  <CardDescription>Напишите нам письмо</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-lg mb-2">info@shade-pro.ru</p>
                  <p className="text-sm text-gray-600 mb-4">Ответим в течение часа</p>
                  <Button className="w-full" variant="outline">Написать</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="MessageCircle" className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>Онлайн-чат</CardTitle>
                  <CardDescription>Быстрые ответы в чате</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-lg mb-2">Чат на сайте</p>
                  <p className="text-sm text-gray-600 mb-4">Онлайн с 9:00 до 21:00</p>
                  <Button className="w-full" variant="outline">Открыть чат</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}