import React from "react"
import { useTranslation } from "react-i18next"
import { FaRegCalendarAlt } from "react-icons/fa"
import { GiPositionMarker } from "react-icons/gi"
import { HiDownload } from "react-icons/hi"
import { useLocation } from "react-router-dom"
import { formatDate } from "../utils/formatDate"
import { Link } from "react-router-dom"
import QRCode from "react-qr-code"
import { Navbar } from "../components/UI/Navbar"
import stylesPDF from '../utils/stylesPDF'
import { Page, Text, View, Document, Image, PDFDownloadLink } from '@react-pdf/renderer'


const TicketPDF: React.FC<{ ticket: any }> = ({ ticket }) => (
  <Document>
    <Page size="A4" style={stylesPDF.page}>
      <View style={stylesPDF.section}>
        <Text style={stylesPDF.header}>Entrada</Text>
        <Text style={stylesPDF.text}>Evento: {ticket.entrada.gameName}</Text>
        <Text style={stylesPDF.text}>Descripción: {ticket.entrada.description}</Text>
        <Text style={stylesPDF.text}>Dirección: {ticket.entrada.address}</Text>
        <Text style={stylesPDF.text}>Fecha: {formatDate(new Date(ticket.entrada.eventDate))}</Text>
      </View>

      <View style={stylesPDF.qrCode}>
        <Text style={stylesPDF.text}>Código QR:</Text>
        <Image
          style={stylesPDF.qrImage}
          src={`https://api.qrserver.com/v1/create-qr-code/?data=${ticket.entrada.codigoQR}&size=120x120`} // Aumento del tamaño
        />
        <Text style={stylesPDF.text}>{ticket.entrada.codigoQR}</Text>
      </View>

      <Text style={stylesPDF.footer}>Gracias por su compra!</Text>
      <Text style={[stylesPDF.footer, stylesPDF.footerHighlight]}>
        ¡Disfruta del partido!
      </Text>
    </Page>
  </Document>
);

export default function Ticket() {
  const { t } = useTranslation();
  const location = useLocation();
  const { ticket } = location.state


  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="flex flex-col">
        <div className="m-5 mt-24 text-center text-xl font-semibold">
          <h1>{t("yourEntry")}</h1>
        </div>

        <section className="flex flex-col items-center text-center">
          <div>
            <QRCode className="h-[15rem] w-[15rem]" value={ticket.entrada.codigoQR} />
          </div>
          <div>
            <p className="mt-4">
              <span className="font-semibold">Ref:</span> {ticket.entrada.codigoQR}
            </p>
          </div>
          <div className="m-4 rounded-xl bg-customGreen p-2 text-customWhite">
            <p>{t("authenticityVerified")}</p>
          </div>

          <div className="w-full p-1">
            <h2 className="text-center text-xl font-semibold text-gray-700">{ticket?.entrada.gameName}</h2>
          </div>

          <div className="p-1 pt-3 font-semibold">
            <p>{ticket.entrada.description}</p>
          </div>

          <div className="text flex flex-col gap-3 pt-6 text-xl">
            <div className="flex flex-row">
              <span className="flex gap-3">
                <FaRegCalendarAlt className="mr-1 text-3xl text-customGreen" />
                <p>{formatDate(new Date(ticket.entrada.eventDate))}</p>
              </span>
            </div>
            <div className="flex flex-row">
              <GiPositionMarker className="text-2xl text-customGreen" />{" "}
              <p className="ml-2">{ticket.entrada.address}</p>
            </div>
          </div>

          <div className="flex flex-row space-x-20 pt-10 pb-5 text-xl">
            <p>
              {t("problems")} <Link className="underline underline-offset-1 text-blue-500" to="/contact">{t("contactUs")}</Link>
            </p>
            <PDFDownloadLink
              document={<TicketPDF ticket={ticket} />}
              fileName={`${ticket.entrada.codigoQR}-ticket.pdf`}
            >
              <button className="text-4xl text-customLigthRed">
                <HiDownload />
              </button>
            </PDFDownloadLink>
          </div>
        </section>
      </div>
    </>
  );
}