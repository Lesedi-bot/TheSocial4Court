import { useState, useRef } from 'react';
import { PDFDocument } from './components/PDFDocument';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-900 py-12 px-4">
      <PDFDocument />
    </div>
  );
}