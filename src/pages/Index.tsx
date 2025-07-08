import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Building2" className="h-8 w-8 text-blue" />
              <h1 className="text-2xl font-bold text-gray-900">FinTech Pro</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-blue transition-colors"
              >
                Главная
              </a>
              <a
                href="#products"
                className="text-gray-700 hover:text-blue transition-colors"
              >
                Продукты
              </a>
              <a
                href="#news"
                className="text-gray-700 hover:text-blue transition-colors"
              >
                Новости
              </a>
              <a
                href="#support"
                className="text-gray-700 hover:text-blue transition-colors"
              >
                Поддержка
              </a>
            </nav>
            <Button className="bg-blue hover:bg-blue-600 text-white">
              Войти
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <Badge className="bg-blue text-white mb-4">
                Новое поколение финансов
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Современные финансовые решения для вашего бизнеса
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Интегрируйте платежи, управляйте финансами и развивайте бизнес с
                нашими инновационными решениями.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue hover:bg-blue-600 text-white px-8 py-3 text-lg">
                  <Icon name="CreditCard" className="mr-2 h-5 w-5" />
                  Т-Банк Интеграция
                </Button>
                <Button
                  variant="outline"
                  className="border-blue text-blue hover:bg-blue hover:text-white px-8 py-3 text-lg"
                >
                  <Icon name="Play" className="mr-2 h-5 w-5" />
                  Демо-версия
                </Button>
              </div>
            </div>
            <div className="animate-slide-up">
              <img
                src="/img/78402dbb-1a89-4a6c-9f09-100c6ea68653.jpg"
                alt="Финансовая аналитика"
                className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши продукты
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр финансовых услуг для современного бизнеса
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Icon name="CreditCard" className="h-6 w-6 text-blue" />
                  <CardTitle className="text-xl">Платежные решения</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Быстрые и безопасные онлайн-платежи с интеграцией Т-Банка
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">API</Badge>
                  <Badge variant="secondary">Мобильные платежи</Badge>
                  <Badge variant="secondary">QR-коды</Badge>
                </div>
                <Button className="w-full bg-blue hover:bg-blue-600 text-white">
                  Подключить Т-Банк
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Icon name="BarChart3" className="h-6 w-6 text-green" />
                  <CardTitle className="text-xl">Аналитика</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Продвинутая аналитика финансовых операций и отчетность
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Дашборды</Badge>
                  <Badge variant="secondary">Отчеты</Badge>
                  <Badge variant="secondary">Прогнозы</Badge>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-green text-green hover:bg-green hover:text-white"
                >
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" className="h-6 w-6 text-red" />
                  <CardTitle className="text-xl">Безопасность</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Многоуровневая защита данных и соответствие стандартам
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Шифрование</Badge>
                  <Badge variant="secondary">2FA</Badge>
                  <Badge variant="secondary">Комплаенс</Badge>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-red text-red hover:bg-red hover:text-white"
                >
                  Узнать больше
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Последние новости
            </h2>
            <p className="text-xl text-gray-600">
              Будьте в курсе новых возможностей и обновлений
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-blue text-white">Обновление</Badge>
                  <span className="text-sm text-gray-500">5 дней назад</span>
                </div>
                <CardTitle className="text-lg">
                  Новая интеграция с Т-Банком
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Запущена расширенная интеграция с Т-Банком для мгновенных
                  переводов и улучшенной аналитики платежей.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-green text-white">Функция</Badge>
                  <span className="text-sm text-gray-500">1 неделю назад</span>
                </div>
                <CardTitle className="text-lg">
                  Мобильное приложение 2.0
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Полностью обновленное мобильное приложение с новым дизайном и
                  расширенными возможностями управления.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-gray text-white">Новости</Badge>
                  <span className="text-sm text-gray-500">2 недели назад</span>
                </div>
                <CardTitle className="text-lg">
                  Партнерство с ведущими банками
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Заключены партнерские соглашения с крупнейшими банками для
                  расширения возможностей платежной экосистемы.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Поддержка 24/7
            </h2>
            <p className="text-xl text-gray-600">Мы всегда готовы помочь вам</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <Icon
                  name="MessageCircle"
                  className="h-12 w-12 text-blue mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">Онлайн чат</h3>
                <p className="text-gray-600 mb-4">
                  Мгновенные ответы на ваши вопросы
                </p>
                <Button className="bg-blue hover:bg-blue-600 text-white">
                  Начать чат
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <Icon
                  name="Phone"
                  className="h-12 w-12 text-green mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">Телефон</h3>
                <p className="text-gray-600 mb-4">+7 (800) 123-45-67</p>
                <Button
                  variant="outline"
                  className="border-green text-green hover:bg-green hover:text-white"
                >
                  Позвонить
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <Icon name="Mail" className="h-12 w-12 text-red mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-600 mb-4">support@fintech.ru</p>
                <Button
                  variant="outline"
                  className="border-red text-red hover:bg-red hover:text-white"
                >
                  Написать
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <Icon
                  name="BookOpen"
                  className="h-12 w-12 text-gray mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">База знаний</h3>
                <p className="text-gray-600 mb-4">Документация и FAQ</p>
                <Button
                  variant="outline"
                  className="border-gray text-gray hover:bg-gray hover:text-white"
                >
                  Перейти
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Building2" className="h-6 w-6" />
                <h3 className="text-xl font-bold">FinTech Pro</h3>
              </div>
              <p className="text-gray-400">
                Современные финансовые решения для развития вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Продукты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Платежи
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Аналитика
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Безопасность
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Карьера
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Помощь
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Документация
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FinTech Pro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
