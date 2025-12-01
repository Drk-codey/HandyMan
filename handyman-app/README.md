# HandyMan Services Marketplace

A modern, full-featured marketplace connecting customers with professional handyman service providers.

## 🚀 Features

### For Customers
- Browse and search services by category
- View detailed service information and reviews
- Book services with preferred date and time
- Track booking status
- Rate and review completed services
- Secure payment processing (UI)

### For Handymen
- Create and manage service listings
- Accept/decline booking requests
- View earnings dashboard
- Track completed jobs
- Respond to customer reviews
- Manage availability

## 🛠️ Tech Stack

- **Frontend**: React 19 with TypeScript
- **State Management**: Redux Toolkit
- **Routing**: React Router v7
- **Styling**: TailwindCSS
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **HTTP Client**: Axios

## 📦 Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/handyman-app.git

# Navigate to project directory
cd handyman-app

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🏗️ Project Structure
```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── customer/           # Customer-specific components
│   ├── handyman/           # Handyman-specific components
│   └── shared/             # Shared components
├── pages/
│   ├── customer/           # Customer pages
│   ├── handyman/           # Handyman pages
│   └── common/             # Common pages (auth, landing)
├── layouts/                # Layout components
├── hooks/                  # Custom React hooks
├── store/                  # Redux toolkit slices
├── services/               # API service layer
├── types/                  # TypeScript type definitions
└── utils/                  # Helper functions
```

## 🔑 Environment Variables

Create a `.env` file in the root directory:
```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=HandyMan
```

## 📱 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design System

### Colors
- Primary: Orange (#ea580c)
- Success: Green
- Warning: Yellow
- Error: Red
- Info: Blue

### Typography
- Font Family: Inter

## 🔒 Security Best Practices

1. **Authentication**: JWT tokens stored in localStorage
2. **API Security**: Axios interceptors for token management
3. **Input Validation**: Zod schemas for all forms
4. **XSS Protection**: React's built-in escaping
5. **HTTPS**: All API calls over HTTPS in production

## 🚧 Known Limitations

- Payment integration is UI-only (no actual payment processing)
- Real-time messaging is simulated
- File uploads are not implemented
- No backend included (API calls will fail without backend)

## 📝 Future Enhancements

- [ ] Real-time chat with WebSockets
- [ ] Push notifications
- [ ] Advanced search filters
- [ ] Service provider verification
- [ ] Multi-language support
- [ ] PWA capabilities
- [ ] Payment gateway integration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Authors

- Drk-codey - Initial work

## 🙏 Acknowledgments

- UI/UX inspiration from modern marketplace designs
- Icons by Lucide React
- Images from Unsplash