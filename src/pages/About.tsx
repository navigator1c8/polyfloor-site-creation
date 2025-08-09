import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

export default function About() {
  const team = [
    {
      name: "Александр Петров",
      position: "Генеральный директор",
      experience: "15 лет",
      image: "/img/ef3c4292-aa8f-4326-9b0f-2c4aecbfee15.jpg",
      description: "Основатель компании, эксперт в области полимерных покрытий"
    },
    {
      name: "Мария Сидорова",
      position: "Главный технолог",
      experience: "12 лет",
      image: "/img/eefc34c5-1e9c-41de-9bf4-9fe681faa804.jpg",
      description: "Разработка технологических решений и контроль качества"
    },
    {
      name: "Дмитрий Иванов",
      position: "Руководитель производства",
      experience: "10 лет",
      image: "/img/72f4b2bc-8448-4df2-bf59-959d09008849.jpg",
      description: "Организация производственных процессов и логистики"
    },
    {
      name: "Елена Козлова",
      position: "Коммерческий директор",
      experience: "8 лет",
      image: "/img/3af2a4ee-f64a-49a2-bf27-ce7fe23c5731.jpg",
      description: "Развитие бизнеса и работа с ключевыми клиентами"
    }
  ];

  const values = [
    {
      title: "Качество",
      description: "Используем только сертифицированные материалы европейских производителей",
      icon: "Award"
    },
    {
      title: "Надежность",
      description: "Гарантия на все виды работ до 20 лет, собственная служба сервиса",
      icon: "Shield"
    },
    {
      title: "Инновации",
      description: "Постоянно внедряем новые технологии и материалы в производство",
      icon: "Lightbulb"
    },
    {
      title: "Профессионализм",
      description: "Команда сертифицированных специалистов с многолетним опытом",
      icon: "Users"
    }
  ];

  const achievements = [
    {
      year: "2010",
      title: "Основание компании",
      description: "Начало деятельности в сфере полимерных покрытий"
    },
    {
      year: "2015",
      title: "Расширение производства",
      description: "Открытие собственного производственного цеха"
    },
    {
      year: "2018",
      title: "Сертификация ISO 9001",
      description: "Получение международного сертификата качества"
    },
    {
      year: "2020",
      title: "1000-й проект",
      description: "Завершение тысячного проекта по устройству полов"
    },
    {
      year: "2022",
      title: "Региональное развитие",
      description: "Открытие филиалов в 10 городах России"
    },
    {
      year: "2024",
      title: "Лидер рынка",
      description: "Признание лидером в сфере полимерных покрытий"
    }
  ];

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
              <a href="/portfolio" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Портфолио</a>
              <a href="/about" className="text-blue-600 font-medium">О нас</a>
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
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">О компании</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Лидер рынка{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                полимерных покрытий
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Более 14 лет опыта в области устройства полимерных полов. 
              Мы создаем долговечные и красивые покрытия для любых объектов.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Наша история
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Компания ShadePro была основана в 2010 году группой энтузиастов, 
                  увлеченных идеей создания идеальных полимерных покрытий. 
                  За годы работы мы выросли от небольшой команды до ведущей компании отрасли.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Сегодня мы гордимся тем, что наши покрытия служат на тысячах объектов 
                  по всей России - от небольших офисов до крупнейших промышленных предприятий.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                  <div className="text-gray-600">Завершенных проектов</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50</div>
                  <div className="text-gray-600">Специалистов в команде</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">14</div>
                  <div className="text-gray-600">Лет на рынке</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10</div>
                  <div className="text-gray-600">Городов присутствия</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="/img/ef3c4292-aa8f-4326-9b0f-2c4aecbfee15.jpg"
                  alt="Наша команда"
                  className="rounded-xl shadow-lg w-full h-48 object-cover"
                />
                <img 
                  src="/img/eefc34c5-1e9c-41de-9bf4-9fe681faa804.jpg"
                  alt="Производство"
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img 
                  src="/img/72f4b2bc-8448-4df2-bf59-959d09008849.jpg"
                  alt="Офис компании"
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                />
                <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                  <CardContent className="p-6 text-center">
                    <Icon name="Award" className="w-8 h-8 mx-auto mb-3 text-white" />
                    <h3 className="font-bold text-xl mb-2">ISO 9001:2015</h3>
                    <p className="text-blue-100">Сертифицированная система менеджмента качества</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">Наши ценности</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Принципы нашей работы
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={value.icon as any} className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">История развития</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Ключевые вехи компании
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge className="bg-blue-100 text-blue-800">{achievement.year}</Badge>
                        </div>
                        <CardTitle className="text-xl">{achievement.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{achievement.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">Наша команда</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Профессионалы своего дела
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="relative mx-auto mb-4">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto group-hover:scale-110 transition-transform"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <Icon name="CheckCircle" className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-blue-600">{member.position}</CardDescription>
                  <Badge variant="secondary" className="mx-auto">
                    Опыт: {member.experience}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Присоединяйтесь к нашим клиентам
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Доверьте свой проект профессионалам с 14-летним опытом и тысячами довольных клиентов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Icon name="Calculator" className="w-5 h-5 mr-2" />
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Icon name="Phone" className="w-5 h-5 mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}