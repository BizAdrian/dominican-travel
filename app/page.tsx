import Image from "next/image"
import Link from "next/link"
import {
  TreePalmIcon as PalmTree,
  Phone,
  Mail,
  Calendar,
  MapPin,
  DollarSign,
  Hotel,
  Utensils,
  Ticket,
  Car,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <PalmTree className="h-6 w-6 text-blue-900" />
            <span className="text-xl font-bold">Caribe Aventuras</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Inicio
            </Link>
            <Link href="#destinos" className="text-sm font-medium transition-colors hover:text-primary">
              Destinos
            </Link>
            <Link href="#tour" className="text-sm font-medium transition-colors hover:text-primary">
              Tour Este Tropical
            </Link>
            <Link href="#contacto" className="text-sm font-medium transition-colors hover:text-primary">
              Contacto
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <Phone className="h-4 w-4 text-blue-900" />
              <span className="text-sm">+1 (809) 555-1234</span>
            </div>
            <Button className="bg-blue-900 hover:bg-rose-600">Reservar Ahora</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <video
          src="/playita.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative z-10 flex h-full flex-col items-start justify-center text-white">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-blue-900 hover:bg-rose-500">TOUR EXCLUSIVO</Badge>
            <span className="text-sm">Región Este</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            DESCUBRE
            <br />
            EL PARAÍSO
          </h1>
          <p className="max-w-xl text-lg md:text-xl mb-8">
            Explora las playas de arena blanca, aguas cristalinas y la vibrante cultura de la Región Este de República
            Dominicana con nuestro tour exclusivo de 7 días.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-blue-900 hover:bg-rose-600">
              Ver Tour Completo
            </Button>
            <Button size="lg" className="text-white border-white hover:bg-white/20">
              Contactar Asesor
            </Button>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinos" className="py-16 bg-black text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Destinos Destacados</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nuestro tour por la Región Este te lleva a los lugares más impresionantes del Caribe dominicano
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="/imagen1.jpg?height=600&width=400"
                alt="La Romana y Altos de Chavón"
                width={400}
                height={600}
                className="w-full aspect-[3/4] object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-xl font-bold">La Romana y Altos de Chavón</h3>
                <p className="text-sm text-gray-200">Un Inicio de Ensueño</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="/imagen2.jpg?height=600&width=400"
                alt="Parque Nacional Cotubanamá"
                width={400}
                height={600}
                className="w-full aspect-[3/4] object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-xl font-bold">Parque Nacional Cotubanamá</h3>
                <p className="text-sm text-gray-200">Conexión con la Naturaleza</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="/imagen3.png?height=600&width=400"
                alt="Isla Saona"
                width={400}
                height={600}
                className="w-full aspect-[3/4] object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-xl font-bold">Isla Saona</h3>
                <p className="text-sm text-gray-200">Un Paraíso por Descubrir</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="/imagen4.jpg?height=600&width=400"
                alt="Higüey"
                width={400}
                height={600}
                className="w-full aspect-[3/4] object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-xl font-bold">Punta Cana</h3>
                <p className="text-sm text-gray-200">Aventura en el Paraíso</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Tour Details Section */}
      <section id="tour" className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="bg-blue-900 hover:bg-rose-500 mb-4">TOUR ESTE TROPICAL</Badge>
            <h2 className="text-3xl font-bold mb-4">7 días de Aventura en el Paraíso</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un recorrido completo por las mejores playas y atracciones de la Región Este de República Dominicana
            </p>
          </div>

          <Tabs defaultValue="itinerario" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="itinerario">Itinerario</TabsTrigger>
              <TabsTrigger value="alojamiento">Alojamiento</TabsTrigger>
              <TabsTrigger value="transporte">Transporte</TabsTrigger>
              <TabsTrigger value="presupuesto">Presupuesto</TabsTrigger>
            </TabsList>

            <TabsContent value="itinerario" className="mt-6">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-blue-900" />
                      Día 1: La Romana y Altos de Chavón
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="bg-rose-100 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                          1
                        </span>
                        <div>
                          <p className="font-medium">Recepción y traslado ecológico</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-rose-100 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                          2
                        </span>
                        <div>
                          <p className="font-medium">Visita guiada a Altos de Chavón y Museo Arqueológico</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-rose-100 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                          3
                        </span>
                        <div>
                          <p className="font-medium">Talleres artesanales (cerámica, reciclaje, pintura)</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-rose-100 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                          4
                        </span>
                        <div>
                          <p className="font-medium">Cena típica con música en vivo </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-blue-900" />
                      Día 2: Parque Nacional Cotubanamá
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="bg-rose-100 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                          1
                        </span>
                        <div>
                          <p className="font-medium">Senderismo por la selva y cuevas taínas</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-rose-100 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                          2
                        </span>
                        <div>
                          <p className="font-medium">Observación de aves y especies endémicas</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-rose-100 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                          3
                        </span>
                        <div>
                          <p className="font-medium">Playa virgen y picnic eco-amigable</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-rose-100 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                          4
                        </span>
                        <div>
                          <p className="font-medium">Charla con guardaparques</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-blue-900" />
                      Día 3: Isla Saona
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="bg-rose-100 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                          1
                        </span>
                        <div>
                          <p className="font-medium">Excursión guiada con biólogos marinos</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-rose-100 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                          2
                        </span>
                        <div>
                          <p className="font-medium">Comunidad de Mano Juan: pesca sostenible</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-rose-100 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                          3
                        </span>
                        <div>
                          <p className="font-medium">Limpieza de playa o taller de reciclaje</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-blue-900" />
                      Día 4: Higüey
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="bg-rose-100 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                          1
                        </span>
                        <div>
                          <p className="font-medium">Basílica de La Altagracia y Museo</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-rose-100 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                          2
                        </span>
                        <div>
                          <p className="font-medium">Talleres con mujeres artesanas</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-rose-100 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                          3
                        </span>
                        <div>
                          <p className="font-medium">Comida comunitaria con productos orgánicos</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-blue-900" />
                      Día 5: Ruta del Cacao, Café y Río
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="bg-rose-100 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                          1
                        </span>
                        <div>
                          <p className="font-medium">Safari ecológico por el campo</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-rose-100 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                          2
                        </span>
                        <div>
                          <p className="font-medium">Finca agroecológica: recolección y degustación</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-rose-100 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                          3
                        </span>
                        <div>
                          <p className="font-medium">Baño en río Anamuya</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-rose-100 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                          4
                        </span>
                        <div>
                          <p className="font-medium">Plantación de un árbol</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-blue-900" />
                      Día 6: Punta Cana
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="bg-rose-100 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                          1
                        </span>
                        <div>
                          <p className="font-medium">Reserva Ecológica Ojos Indígenas</p>
                          <p className="text-sm text-muted-foreground"></p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-rose-100 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                          2
                        </span>
                        <div>
                          <p className="font-medium">Caminata, baño en lagunas, kayak</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-rose-100 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                          3
                        </span>
                        <div>
                          <p className="font-medium">Ceremonia de cierre con agradecimiento a la naturaleza</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-blue-900" />
                      Día 7: Despedida
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="bg-rose-100 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                          1
                        </span>
                        <div>
                          <p className="font-medium">Tiempo libre</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-rose-100 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                          2
                        </span>
                        <div>
                          <p className="font-medium">Certificado de participación ecológica (Gratis)</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-rose-100 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                          3
                        </span>
                        <div>
                          <p className="font-medium">Traslado al aeropuerto</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="alojamiento" className="mt-6">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Hotel className="h-5 w-5 text-blue-900" />
                      Opciones de Alojamiento
                    </CardTitle>
                    <CardDescription>Hoteles 5 estrellas con todo incluido</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg">
                        <Image
                          src="/image-hotel1.jpg?height=200&width=300"
                          alt="Casa de Arte Hotel"
                          width={300}
                          height={200}
                          className="rounded-lg object-cover w-full md:w-1/3 aspect-video"
                        />
                        <div className="flex-1">
                          <h4 className="font-bold text-lg">Casa de Arte Hotel</h4>
                          <p className="text-sm text-muted-foreground mb-2">La Romana - Hotel Boutique</p>
                          <div className="flex flex-wrap gap-2 mb-2">
                            <Badge variant="outline">Diseño artístico</Badge>
                            <Badge variant="outline">Desayuno gourmet </Badge>
                            <Badge variant="outline">WiFi</Badge>
                            <Badge variant="outline">Piscina</Badge>
                          </div>
                          <p className="text-sm mb-4">
                            Lujoso resort con acceso directo a la playa, múltiples restaurantes y actividades para toda
                            la familia.
                          </p>
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-sm text-muted-foreground">Precio por noche</p>
                              <p className="font-bold text-lg">5,634 DOP</p>
                            </div>
                            <Button size="sm" className="bg-blue-900 hover:bg-rose-600">
                              Ver Detalles
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg">
                        <Image
                          src="/image-hotel2.jpg?height=200&width=300"
                          alt="Hilton Garden Inn"
                          width={300}
                          height={200}
                          className="rounded-lg object-cover w-full md:w-1/3 aspect-video"
                        />
                        <div className="flex-1">
                          <h4 className="font-bold text-lg">Hilton Garden Inn</h4>
                          <p className="text-sm text-muted-foreground mb-2">Bayahibe - Hotel de Playa</p>
                          <div className="flex flex-wrap gap-2 mb-2">
                            <Badge variant="outline">Playa privada</Badge>
                            <Badge variant="outline">Piscinas</Badge>
                            <Badge variant="outline">Restaurantes</Badge>
                            <Badge variant="outline">Actividades acuáticas </Badge>
                            <Badge variant="outline">WiFi </Badge>
                          </div>
                          <p className="text-sm mb-4">
                            Resort exclusivo para adultos con ambiente romántico, gastronomía gourmet y servicio
                            personalizado.
                          </p>
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-sm text-muted-foreground">Precio por noche</p>
                              <p className="font-bold text-lg">6,886 DOP</p>
                            </div>
                            <Button size="sm" className="bg-blue-900 hover:bg-rose-600">
                              Ver Detalles
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg">
                        <Image
                          src="/image-hotel3.png?height=5&width=5"
                          alt="Hotel Rod"
                          width={300}
                          height={200}
                          className="rounded-lg object-cover w-full md:w-1/3 aspect-video"
                        />
                        <div className="flex-1">
                          <h4 className="font-bold text-lg">Hotel Rod</h4>
                          <p className="text-sm text-muted-foreground mb-2">Higüey - Hotel de Ciudad</p>
                          <div className="flex flex-wrap gap-2 mb-2">
                            <Badge variant="outline">Habitaciones cómodas </Badge>
                            <Badge variant="outline">Desayuno buffet</Badge>
                            <Badge variant="outline">Atención personalizada</Badge>
                          </div>
                          <p className="text-sm mb-4">
                            Resort exclusivo para adultos con ambiente romántico, gastronomía gourmet y servicio
                            personalizado.
                          </p>
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-sm text-muted-foreground">Precio por noche</p>
                              <p className="font-bold text-lg">3,756 DOP</p>
                            </div>
                            <Button size="sm" className="bg-blue-900 hover:bg-rose-600">
                              Ver Detalles
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg">
                        <Image
                          src="/image-hotel4.jpg?height=200&width=300"
                          alt="Caribe Sol Hotel"
                          width={300}
                          height={200}
                          className="rounded-lg object-cover w-full md:w-1/3 aspect-video"
                        />
                        <div className="flex-1">
                          <h4 className="font-bold text-lg">Caribe Sol Hotel</h4>
                          <p className="text-sm text-muted-foreground mb-2">Punta Cana/Bávaro - Hotel Estándar</p>
                          <div className="flex flex-wrap gap-2 mb-2">
                            <Badge variant="outline">Ambiente relajado </Badge>
                            <Badge variant="outline">Piscina con bar</Badge>
                            <Badge variant="outline">WiFi</Badge>
                            <Badge variant="outline">Acceso a la playa</Badge>
                            <Badge variant="outline">Entretenimiento nocturno</Badge>
                          </div>
                          <p className="text-sm mb-4">
                            Resort exclusivo para adultos con ambiente romántico, gastronomía gourmet y servicio
                            personalizado.
                          </p>
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-sm text-muted-foreground">Precio por noche</p>
                              <p className="font-bold text-lg">6,260 DOP</p>
                            </div>
                            <Button size="sm" className="bg-blue-900 hover:bg-rose-600">
                              Ver Detalles
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="transporte" className="mt-6">
              <Card className="shadow-lg rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Car className="h-6 w-6 text-blue-900" />
                    Opciones de Transporte
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-500">Todos los traslados incluidos en el paquete</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {/* Día 1 */}
                    <div className="p-6 bg-white border rounded-2xl hover:shadow-md transition duration-500 ease-out transform hover:-translate-y-1">
                      <h4 className="font-bold text-lg mb-1">Día 1: La Romana y Altos de Chavón</h4>
                      <p className="text-sm text-blue-800 font-medium mb-3">Traslado Privado de Bienvenida</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-sm font-semibold mb-2">Incluye:</p>
                          <ul className="text-sm space-y-2">
                            {["Recepción personalizada en el aeropuerto.", "Cómodo minibús con aire acondicionado.", "Conductor profesional y amigable.", "Asistencia con tu equipaje."].map(item => (
                              <li key={item} className="flex items-center gap-2">
                                <span className="bg-green-100 text-green-700 rounded-full w-5 h-5 flex items-center justify-center text-xs">✓</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm font-semibold mb-2">Detalles:</p>
                          <ul className="text-sm space-y-2">
                            <li className="flex items-center gap-2"><MapPin className="h-5 w-5 text-blue-900" /> Desde: Aeropuerto Internacional de Punta Cana (PUJ)</li>
                            <li className="flex items-center gap-2"><MapPin className="h-5 w-5 text-blue-900" /> Hasta: Tu Hotel en La Romana</li>
                            <li className="flex items-center gap-2"><DollarSign className="h-5 w-5 text-blue-900" /> Costo: Desde 1,878 DOP/grupo</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Día 1b: Altos de Chavón */}
                    <div className="p-6 bg-gray-50 border rounded-2xl hover:shadow-md transition duration-500 ease-out transform hover:-translate-y-1">
                      <h4 className="font-bold text-lg mb-1">Explorando Altos de Chavón</h4>
                      <p className="text-sm text-blue-800 font-medium mb-3">Traslado Ecológico</p>
                      <p className="text-sm text-gray-600 mb-2">Disfruta de un paseo eco-friendly por este mágico pueblo de artistas, minimizando el impacto ambiental.</p>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-blue-900" />
                        <span className="text-sm font-medium">Costo: Incluido en el paquete</span>
                      </div>
                    </div>

                    {/* Día 2 */}
                    <div className="p-6 bg-white border rounded-2xl hover:shadow-md transition duration-500 ease-out transform hover:-translate-y-1 space-y-4">
                      <h4 className="font-bold text-lg mb-1">Día 2: Parque Nacional Cotubanamá</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Traslado a Bayahibe */}
                        <div className="p-4 bg-gray-50 rounded-xl border">
                          <h5 className="font-semibold mb-2">Traslado a Bayahibe</h5>
                          <ul className="text-sm space-y-1">
                            <li className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-blue-900" />
                              Desde: La Romana
                            </li>
                            <li className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-blue-900" />
                              Hasta: Bayahibe (Puerta de Entrada al Parque)
                            </li>
                            <li className="flex items-center gap-2">
                              Tipo: Minibús Exclusivo para el Grupo
                            </li>
                            <li className="flex items-center gap-2">
                              <DollarSign className="h-4 w-4 text-blue-900" />
                              Costo: Desde 1,252 DOP/persona
                            </li>
                          </ul>
                          <p className="text-sm text-gray-700 mt-2">
                            Incluye viaje panorámico con vistas espectaculares y espacio para tu comodidad y relajación.
                          </p>
                        </div>
                        {/* Aventuras en el Parque */}
                        <div className="p-4 bg-gray-50 rounded-xl border">
                          <h5 className="font-semibold mb-2">Aventuras en el Parque</h5>
                          <ul className="text-sm space-y-1">
                            <li className="flex items-center gap-2 ">
                              Tipo: Traslados Locales
                            </li>
                            <li className="flex items-center gap-2">
                              <DollarSign className="h-4 w-4 text-blue-900" />
                              Costo: Incluido en las Excursiones
                            </li>
                          </ul>
                          <p className="text-sm text-gray-700 mt-2">
                            Detalle: Te llevamos a los puntos de inicio de los senderos y playas más hermosas.
                          </p>
                        </div>
                      </div>
                    </div>


                    {/* Día 3 */}
                    <div className="p-6 bg-white border rounded-2xl hover:shadow-md transition duration-500 ease-out transform hover:-translate-y-1">
                      <h4 className="font-bold text-lg mb-1">Día 3: Isla Saona - "Un Paraíso por Descubrir" </h4>
                      <h4 className="font-bold text-sm mb-1">Travesía a Isla Saona</h4>
                      <p className="text-sm text-blue-800 font-medium mb-3">Excursión en Lancha/Catamarán</p>
                      <p className="text-sm text-gray-600 mb-2">Navega por las aguas turquesas del Caribe en una experiencia inolvidable.</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-sm font-semibold mb-2">Incluye:</p>
                          <ul className="text-sm space-y-2">
                            {["Embarcación con todas las comodidades.", "Tripulación experta y divertida.", "Bebidas refrescantes a bordo."].map(item => (
                              <li key={item} className="flex items-center gap-2">
                                <span className="bg-green-100 text-green-700 rounded-full w-5 h-5 flex items-center justify-center text-xs">✓</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm font-semibold mb-2">Detalles:</p>
                          <ul className="text-sm space-y-2">
                            <li className="flex items-center gap-2"><DollarSign className="h-5 w-5 text-blue-900" /> Costo: Incluido en el Paquete de la Isla</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Día 4 */}
                    <div className="p-6 bg-white border rounded-2xl hover:shadow-md transition duration-500 ease-out transform hover:-translate-y-1 space-y-4">
                      <h4 className="font-bold text-lg mb-1">Día 4: Higüey</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Viaje Cultural */}
                        <div className="p-4 bg-gray-50 rounded-xl border">
                          <h5 className="font-semibold mb-2">Viaje Cultural</h5>
                          <ul className="text-sm space-y-1">
                            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-900" /> Desde: Bayahibe</li>
                            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-900" /> Hasta: Higüey</li>
                            <li className="flex items-center gap-2">Tipo: Traslado Privado</li>
                            <li className="flex items-center gap-2"><DollarSign className="h-4 w-4 text-blue-900" /> Costo: Desde 1,565 DOP/persona</li>
                          </ul>
                          <p className="text-sm text-gray-700 mt-2">Incluye viaje cómodo y seguro, y oportunidad de disfrutar del paisaje.</p>
                        </div>
                        {/* Recorrido por Higüey */}
                        <div className="p-4 bg-gray-50 rounded-xl border">
                          <h5 className="font-semibold mb-2">Recorrido por Higüey</h5>
                          <ul className="text-sm space-y-1">
                            <li className="flex items-center gap-2">Tipo: Traslados Locales</li>
                            <li className="flex items-center gap-2"><DollarSign className="h-4 w-4 text-blue-900" /> Costo: Incluido en el City Tour</li>
                          </ul>
                          <p className="text-sm text-gray-700 mt-2">Detalle: Te llevamos a la Basílica y a los talleres artesanales.</p>
                        </div>
                      </div>
                    </div>

                    {/* Día 5 */}
                    <div className="p-6 bg-gray-50 border rounded-2xl hover:shadow-md transition duration-500 ease-out transform hover:-translate-y-1 space-y-4">
                      <h4 className="font-bold text-lg mb-1">Día 5: Ruta del Cacao, Café y Río</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Traslado a Punta Cana */}
                        <div className="p-4 bg-white rounded-xl border">
                          <h5 className="font-semibold mb-2">Traslado a Punta Cana</h5>
                          <ul className="text-sm space-y-1">
                            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-900" /> Desde: Higüey</li>
                            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-900" /> Hasta: Punta Cana/Bávaro</li>
                            <li className="flex items-center gap-2">Tipo: Traslado Exclusivo</li>
                            <li className="flex items-center gap-2"><DollarSign className="h-4 w-4 text-blue-900" /> Costo: Desde 1,565 DOP/persona</li>
                          </ul>
                          <p className="text-sm text-gray-700 mt-2">Viaje relajante para prepararte para la aventura.</p>
                        </div>
                        {/* Safari Ecológico */}
                        <div className="p-4 bg-white rounded-xl border">
                          <h5 className="font-semibold mb-2">Safari Ecológico</h5>
                          <ul className="text-sm space-y-1">
                            <li className="flex items-center gap-2">Tipo: Vehículo Especializado</li>
                            <li className="flex items-center gap-2"><DollarSign className="h-4 w-4 text-blue-900" /> Costo: Incluido en la Excursión</li>
                          </ul>
                          <p className="text-sm text-gray-700 mt-2">Explora la belleza natural de la región de manera sostenible.</p>
                        </div>
                      </div>
                    </div>


                    {/* Día 6 */}
                    <div className="p-6 bg-gray-50 border rounded-2xl hover:shadow-md transition duration-500 ease-out transform hover:-translate-y-1">
                      <h4 className="font-bold text-lg mb-1">Día 6: Punta Cana - "Aventura en el Paraíso"</h4>
                      <h4 className="font-bold text-sm mb-1">Explorando Ojos Indígenas</h4>
                      <p className="text-sm text-blue-800 font-medium mb-3">Traslados Locales</p>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-center gap-2"><DollarSign className="h-5 w-5 text-blue-900" /> Costo: Incluido en la Excursión</li>
                      </ul>
                      <p className="text-sm mt-2">Detalle: Descubre las lagunas cristalinas de esta reserva ecológica.</p>
                    </div>

                    {/* Día 7 */}
                    <div className="p-6 bg-gray-50 border rounded-2xl hover:shadow-md transition duration-500 ease-out transform hover:-translate-y-1">
                      <h4 className="font-bold text-lg mb-1">Día 7: Despedida – "Un Hasta Luego Inolvidable"</h4>
                      <p className="text-sm text-blue-800 font-medium mb-3">Traslado de Despedida</p>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-center gap-2"><MapPin className="h-5 w-5 text-blue-900" /> Desde: Hotel en Punta Cana/Bávaro</li>
                        <li className="flex items-center gap-2"><MapPin className="h-5 w-5 text-blue-900" /> Hasta: Aeropuerto Internacional de Punta Cana (PUJ)</li>
                        <li className="flex items-center gap-2"><DollarSign className="h-5 w-5 text-blue-900" /> Costo: Desde 1,252 DOP/persona</li>
                      </ul>
                      <p className="text-sm mt-2">Incluye último viaje cómodo y seguro, con asistencia para tu partida.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="presupuesto" className="mt-6">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-blue-900" />
                      Presupuesto Diario Recomendado
                    </CardTitle>
                    <CardDescription>Gastos adicionales no incluidos en el paquete</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-bold text-lg mb-2">Día 1</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Utensils className="h-4 w-4 text-blue-900" />
                              <p className="font-medium">Comidas</p>
                            </div>
                            <p className="text-sm text-muted-foreground mb-1">Almuerzo y refrigerio: 1,177 DOP</p>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Ticket className="h-4 w-4 text-blue-900" />
                              <p className="font-medium">Actividades</p>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">Entrada al museo arqueológico de altos de Chavón: 294 DOP</p>
                            <p className="text-sm text-muted-foreground">Talleres: 588 DOP</p>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <DollarSign className="h-4 w-4 text-blue-900" />
                              <p className="font-medium">Total Estimado</p>
                            </div>
                            <p className="text-sm font-bold">2059 DOP</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h4 className="font-bold text-lg mb-2">Día 2</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Utensils className="h-4 w-4 text-blue-900" />
                              <p className="font-medium">Comidas</p>
                            </div>
                            <p className="text-sm text-muted-foreground">Picnic opcional: 588 DOP</p>
                            <p className="text-sm text-muted-foreground">Refrigerios: 294 DOP</p>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Ticket className="h-4 w-4 text-blue-900" />
                              <p className="font-medium">Actividades</p>
                            </div>
                            <p className="text-sm text-muted-foreground">Souvenirs: 294 DOP</p>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <DollarSign className="h-4 w-4 text-blue-900" />
                              <p className="font-medium">Total Estimado</p>
                            </div>
                            <p className="text-sm font-bold">1177 DOP</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h4 className="font-bold text-lg mb-2">Día 3</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Utensils className="h-4 w-4 text-blue-900" />
                              <p className="font-medium">Comidas</p>
                            </div>
                            <p className="text-sm text-muted-foreground mb-1">Snacks adicionales: 588 DOP</p>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Ticket className="h-4 w-4 text-blue-900" />
                              <p className="font-medium">Actividades</p>
                            </div>
                            <p className="text-sm text-muted-foreground mb-1">Souvenirs en Mano Juan: 882 DOP</p>
                            <p className="text-sm text-muted-foreground mb-1">Propinas a guías: 294 DOP</p>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <DollarSign className="h-4 w-4 text-blue-900" />
                              <p className="font-medium">Total Estimado</p>
                            </div>
                            <p className="text-sm font-bold">1765 DOP</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h4 className="font-bold text-lg mb-2">Día 4</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Utensils className="h-4 w-4 text-blue-500" />
                              <p className="font-medium">Comidas</p>
                            </div>
                            <p className="text-sm text-muted-foreground mb-1">Almuerzo: 882 DOP</p>
                            <p className="text-sm text-muted-foreground mb-1">Refrigerios: 294 DOP</p>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Ticket className="h-4 w-4 text-blue-500" />
                              <p className="font-medium">Actividades</p>
                            </div>
                            <p className="text-sm text-muted-foreground mb-1">Entrada a Basílica y museo: 588 DOP</p>
                            <p className="text-sm text-muted-foreground mb-1">Souvenirs artesanales: 882 DOP</p>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <DollarSign className="h-4 w-4 text-blue-500" />
                              <p className="font-medium">Total Estimado</p>
                            </div>
                            <p className="text-sm font-bold">2648 DOP</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h4 className="font-bold text-lg mb-2">Día 5</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Utensils className="h-4 w-4 text-blue-500" />
                              <p className="font-medium">Comidas</p>
                            </div>
                            <p className="text-sm text-muted-foreground mb-1">Refrigerios: 294 DOP</p>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Ticket className="h-4 w-4 text-blue-500" />
                              <p className="font-medium">Actividades</p>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3 whitespace-nowrap">Compra de productos locales: 882 DOP</p>
                            <p className="text-sm text-muted-foreground mb-3">Safari local: 882 DOP</p>
                            <p className="text-sm text-muted-foreground mb-3">Propinas: 294 DOP</p>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <DollarSign className="h-4 w-4 text-blue-500" />
                              <p className="font-medium">Total Estimado</p>
                            </div>
                            <p className="text-sm font-bold">2354 DOP</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-bold text-lg mb-2">Día 6</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Utensils className="h-4 w-4 text-blue-500" />
                              <p className="font-medium">Comidas</p>
                            </div>
                            <p className="text-sm text-muted-foreground mb-1">Almuerzo: 882 DOP</p>
                            <p className="text-sm text-muted-foreground">Refrigerio: 294 DOP</p>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Ticket className="h-4 w-4 text-blue-500" />
                              <p className="font-medium">Actividades</p>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">Entrada de la reserva <br />ecológica: 588 DOP</p>
                            <p className="text-sm text-muted-foreground">Kayak: 588 DOP</p>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <DollarSign className="h-4 w-4 text-blue-500" />
                              <p className="font-medium">Total Estimado</p>
                            </div>
                            <p className="text-sm font-bold">2354 DOP</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-bold text-lg mb-2">Día 7</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Utensils className="h-4 w-4 text-blue-500" />
                              <p className="font-medium">Comidas</p>
                            </div>
                            <p className="text-sm text-muted-foreground mb-1">Snacks: 294 DOP</p>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Ticket className="h-4 w-4 text-blue-500" />
                              <p className="font-medium">Actividades</p>
                            </div>
                            <p className="text-sm text-muted-foreground mb-1">Souvenirs de último <br />momento: 588 DOP</p>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <DollarSign className="h-4 w-4 text-blue-500" />
                              <p className="font-medium">Total Estimado</p>
                            </div>
                            <p className="text-sm font-bold">882 DOP</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="w-full flex flex-col md:flex-row justify-between items-center">
                      <p className="text-sm text-muted-foreground">
                        Presupuesto total para gastos adicionales: <span className="font-bold">13,239 DOP</span> por
                        persona
                      </p>
                      <Button className="mt-4 md:mt-0 bg-blue-500 hover:bg-rose-600">Ver Paquete Completo</Button>
                    </div>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-rose-500" />
                      Costo Total del Paquete
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1: Transporte */}
                        <div className="p-6 border rounded-lg bg-rose-50 h-full flex flex-col justify-between min-h-[450px]">
                          <div>
                            <h4 className="font-bold text-xl mb-4 text-rose-700">Total, Presupuesto de Transporte (Por Persona)</h4>
                            <ul className="space-y-4 mb-6 leading-relaxed text-base">
                              <li className="flex justify-between">
                                <span>Traslados entre ciudades: </span>
                                <span className="font-medium">6,254 DOP</span>
                              </li>
                              <li className="flex justify-between">
                                <span>Traslados locales/actividades:</span>
                                <span className="font-medium">3,762 DOP</span>
                              </li>
                              <li className="flex justify-between">
                                <span>Excursión Isla Saona:</span>
                                <span className="font-medium">2,504 DOP</span>
                              </li>
                              <li className="flex justify-between">
                                <span>Traslados aeropuerto:</span>
                                <span className="font-medium">1,252 DOP</span>
                              </li>
                              <li className="border-t pt-2 mt-2 flex justify-between">
                                <span className="font-bold">Total:</span>
                                <span className="font-bold text-xl">13,772 DOP</span>
                              </li>
                            </ul>
                          </div>
                          <Button className="w-full bg-rose-500 hover:bg-rose-600">Reservar Transporte</Button>
                        </div>

                        {/* Card 2: Alojamiento */}
                        <div className="p-6 border rounded-lg h-full flex flex-col justify-between min-h-[450px]">
                          <div>
                            <h4 className="font-bold text-xl mb-4">Total, Presupuesto de Alojamiento (Por Persona)</h4>
                            <ul className="space-y-3 mb-6">
                              <li className="flex justify-between">
                                <span>La Romana (1 noche): </span>
                                <span className="font-medium">2,817 DOP</span>
                              </li>
                              <li className="flex justify-between">
                                <span>Bayahibe/Dominicus (2 noches): </span>
                                <span className="font-medium">6,886 DOP</span>
                              </li>
                              <li className="flex justify-between">
                                <span>Higüey (1 noche):</span>
                                <span className="font-medium">3,756 DOP</span>
                              </li> <li className="flex justify-between">
                                <span>Punta Cana/Bávaro (2 noches):</span>
                                <span className="font-medium">6,260 DOP</span>
                              </li>

                              <li className="border-t pt-2 mt-2 flex justify-between">
                                <span className="font-bold">Total:</span>
                                <span className="font-bold text-xl">19,719 DOP</span>
                              </li>
                            </ul>
                          </div>
                          <Button className="relative w-full px-6 py-3 font-medium text-white rounded-lg overflow-hidden group">
                            <span className="relative z-10">Reservar Alojamiento</span>
                            <span
                              className="
      absolute inset-0 rounded-lg
      bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600
      bg-[length:200%_200%]
      opacity-0
      transition-opacity duration-500 ease-in-out
      group-hover:opacity-100
      group-hover:animation-water-wave
    "
                            />
                          </Button>


                        </div>

                        {/* Card 3: Actividades */}
                        <div className="p-6 border rounded-lg bg-blue-50 h-full flex flex-col justify-between min-h-[450px]">
                          <div>
                            <h4 className="font-bold text-xl mb-4 text-blue-700">Total, Combinado (Transporte + Alojamiento)</h4>
                            <ul className="space-y-3 mb-6">
                              <li className="flex justify-between">
                                <span>Total, A (Transporte):</span>
                                <span className="font-medium">13,772 DOP</span>
                              </li>
                              <li className="flex justify-between">
                                <span>Total, B (Alojamiento):</span>
                                <span className="font-medium">19,719 DOP</span>
                              </li>
                              <li className="border-t pt-2 mt-2 flex justify-between">
                                <span className="font-bold">Total A + B:</span>
                                <span className="font-bold text-xl">33,491 DOP</span>
                              </li>
                            </ul>
                          </div>
                          <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Reservar Paquete</Button>
                        </div>
                      </div>

                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 bg-black text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <PalmTree className="h-6 w-6 text-blue-500" />
                <span className="text-xl font-bold">Caribe Aventuras</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">¿Listo para vivir la experiencia?</h2>
              <p className="text-muted-foreground mb-6">
                Contáctanos para reservar tu próxima aventura en el paraíso dominicano. Nuestros asesores están listos
                para ayudarte a planificar unas vacaciones inolvidables.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-muted-foreground">+1 (809) 555-1234</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@caribeaventuras.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="font-medium">Dirección</p>
                    <p className="text-muted-foreground">Av. España 123, Punta Cana, República Dominicana</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4 p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nombre
                    </label>
                    <input
                      id="name"
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Teléfono
                  </label>
                  <input
                    id="phone"
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
                    placeholder="+1 (000) 000-0000"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="package" className="text-sm font-medium">
                    Paquete de Interés
                  </label>
                  <select
                    id="package"
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
                  >
                    <option value="" className="text-black">Selecciona un paquete</option>
                    <option value="premium" className="text-black">Tour Este Tropical - Premium</option>
                    <option value="standard" className="text-black">Tour Este Tropical - Estándar</option>
                    <option value="custom" className="text-black">Paquete Personalizado</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
                    placeholder="Cuéntanos sobre tus planes de viaje..."
                    spellCheck={false}
                  />
                </div>
                <Button className="w-full bg-blue-500 hover:bg-rose-600">Enviar Consulta</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-white/10 text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <PalmTree className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold">Caribe Aventuras</span>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-white">
                Términos y Condiciones
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-white">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-white">
                FAQ
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Caribe Aventuras. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
