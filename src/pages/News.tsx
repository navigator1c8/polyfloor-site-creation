import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from '@/components/ui/icon';

export default function News() {
  const news = [
    {
      id: 1,
      title: "Открытие нового производственного цеха",
      excerpt: "Компания ShadePro расширяет производственные мощности для удовлетворения растущего спроса",
      content: "В рамках стратегии развития компания ShadePro открыла новый производственный цех площадью 2000 м². Новые мощности позволят увеличить объем производства полимерных покрытий на 40% и сократить сроки выполнения заказов.",
      date: "2024-01-15",
      category: "Компания",
      image: "/img/ef3c4292-aa8f-4326-9b0f-2c4aecbfee15.jpg",
      author: "Пресс-служба ShadePro",
      readTime: "3 мин"
    },
    {
      id: 2,
      title: "Новая линейка декоративных покрытий",
      excerpt: "Представляем инновационные 3D-покрытия с эффектом глубины и объема",
      content: "Компания представила новую линейку декоративных полимерных покрытий с 3D-эффектами. Технология позволяет создавать покрытия с визуальной глубиной до 10 см, имитирующие различные природные материалы.",
      date: "2024-01-10",
      category: "Продукция",
      image: "/img/eefc34c5-1e9c-41de-9bf4-9fe681faa804.jpg",
      author: "Отдел разработки",
      readTime: "5 мин"
    },
    {
      id: 3,
      title: "Участие в выставке 'Строительство и Архитектура'",
      excerpt: "ShadePro представит свои решения на крупнейшей строительной выставке России",
      content: "С 20 по 23 марта компания ShadePro примет участие в международной выставке 'Строительство и Архитектура' в Экспоцентре. Посетители смогут ознакомиться с новинками и получить консультации специалистов.",
      date: "2024-01-08",
      category: "События",
      image: "/img/72f4b2bc-8448-4df2-bf59-959d09008849.jpg",
      author: "Маркетинговый отдел",
      readTime: "2 мин"
    },
    {
      id: 4,
      title: "Сертификация по стандарту ISO 45001",
      excerpt: "Компания получила сертификат системы менеджмента охраны труда",
      content: "ShadePro успешно прошла аудит и получила сертификат соответствия международному стандарту ISO 45001:2018. Это подтверждает высокий уровень безопасности производственных процессов.",
      date: "2024-01-05",
      category: "Качество",
      image: "/img/3af2a4ee-f64a-49a2-bf27-ce7fe23c5731.jpg",
      author: "Служба качества",
      readTime: "4 мин"
    },
    {
      id: 5,
      title: "Завершение проекта для Газпрома",
      excerpt: "Успешно завершены работы по устройству полов на крупном промышленном объекте",
      content: "Компания завершила масштабный проект по устройству промышленных полимерных покрытий на объекте ПАО 'Газпром'. Общая площадь покрытий составила 15 000 м².",
      date: "2024-01-03",
      category: "Проекты",
      image: "/img/ef3c4292-aa8f-4326-9b0f-2c4aecbfee15.jpg",
      author: "Проектный отдел",
      readTime: "6 мин"
    },
    {
      id: 6,
      title: "Внедрение роботизированных систем",
      excerpt: "Новые технологии автоматизации повышают качество и скорость работ",
      content: "В производственный процесс внедрены роботизированные системы нанесения покрытий. Это позволило повысить точность нанесения и сократить время выполнения работ на 25%.",
      date: "2023-12-28",
      category: "Технологии",
      image: "/img/eefc34c5-1e9c-41de-9bf4-9fe681faa804.jpg",
      author: "Технический отдел",
      readTime: "4 мин"
    }
  ];

  const categories = ["Все", "Компания", "Продукция", "События", "Качество", "Проекты", "Технологии"];

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
              <a href="/news" className="text-blue-600 font-medium">Новости</a>
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
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">Новости</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Новости и{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                события компании
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Следите за последними новостями, достижениями и событиями 
              в мире полимерных покрытий.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={index === 0 ? "bg-gradient-to-r from-blue-600 to-purple-600" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <div className="relative w-full lg:w-80">
              <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Поиск по новостям..."
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img 
                    src={news[0].image}
                    alt={news[0].title}
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-600 text-white">Главная новость</Badge>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="secondary">{news[0].category}</Badge>
                    <span className="text-sm text-gray-500">{news[0].date}</span>
                    <span className="text-sm text-gray-500">{news[0].readTime}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{news[0].title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{news[0].content}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Автор: {news[0].author}</span>
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                      Читать полностью
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.slice(1).map((article) => (
              <Card key={article.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">
                      {article.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">{article.title}</CardTitle>
                  <CardDescription className="text-lg line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Автор: {article.author}</span>
                    <Button variant="outline" size="sm">
                      Читать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <Icon name="Plus" className="w-4 h-4 mr-2" />
              Загрузить еще
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Подпишитесь на новости
            </h2>
            <p className="text-xl mb-8">
              Получайте последние новости и обновления прямо на вашу почту
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Ваш email"
                className="bg-white/10 border-white/20 text-white placeholder-white/70"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                <Icon name="Mail" className="w-4 h-4 mr-2" />
                Подписаться
              </Button>
            </div>
            
            <p className="text-sm text-blue-100 mt-4">
              Отправляем не чаще 1 раза в неделю. Никакого спама.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}