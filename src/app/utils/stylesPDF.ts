import { StyleSheet } from '@react-pdf/renderer';

const stylesPDF = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#f9f9f9',
  },
  section: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 8,
    border: '1px solid #ddd',
    backgroundColor: '#ffffff',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  header: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#333',
  },
  text: {
    fontSize: 14,
    marginBottom: 5,
    fontFamily: 'Helvetica',
    color: '#555',
  },
  qrCode: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrImage: {
    height: 120,
    width: 120,
    marginVertical: 10,
  },
  footer: {
    marginTop: 20,
    fontSize: 12,
    textAlign: 'center',
    color: '#777',
  },
  footerHighlight: {
    fontWeight: 'bold',
    color: '#28a745',
  },
});

export default stylesPDF;