import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "Ordering & Payment",
      questions: [
        {
          question: "How can I place an order?",
          answer: "You can easily place an order through our website. Simply browse products, add items to your cart, and proceed to checkout. We accept credit cards, PayPal, and cash on delivery."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit and debit cards (Visa, MasterCard, American Express), PayPal, and cash on delivery for eligible locations."
        },
        {
          question: "Is my payment information secure?",
          answer: "Yes! We use industry-standard SSL encryption to protect your payment information. We never store your complete card details on our servers."
        },
        {
          question: "Can I modify or cancel my order?",
          answer: "Yes, you can modify or cancel your order within 2 hours of placement. Please contact our customer service immediately at info@alarabyoils.com or call +1 (234) 567-890."
        }
      ]
    },
    {
      category: "Shipping & Delivery",
      questions: [
        {
          question: "Do you offer free shipping?",
          answer: "Yes! We offer free standard shipping on all orders. Express shipping is available for an additional fee during checkout."
        },
        {
          question: "How long does shipping take?",
          answer: "Standard shipping typically takes 3-7 business days. Express shipping delivers within 1-3 business days. You'll receive a tracking number once your order ships."
        },
        {
          question: "Do you ship internationally?",
          answer: "Currently, we ship within the United States and Canada. We're working on expanding our international shipping options soon!"
        },
        {
          question: "How can I track my order?",
          answer: "Once your order ships, you'll receive an email with a tracking number. You can use this number to track your package on our website or the carrier's website."
        }
      ]
    },
    {
      category: "Products & Quality",
      questions: [
        {
          question: "Are your products 100% natural?",
          answer: "Yes! All our products are made from 100% natural, organic ingredients. We never use synthetic fragrances, parabens, or harmful chemicals."
        },
        {
          question: "Are your products tested on animals?",
          answer: "Absolutely not. We are completely cruelty-free and vegan. None of our products or ingredients are tested on animals."
        },
        {
          question: "How should I store essential oils?",
          answer: "Store essential oils in a cool, dark place away from direct sunlight. Keep bottles tightly closed and out of reach of children. Proper storage helps maintain potency."
        },
        {
          question: "What is the shelf life of your products?",
          answer: "Most of our products have a shelf life of 2-3 years when stored properly. Each product has a 'best before' date printed on the packaging."
        },
        {
          question: "Do you offer product samples?",
          answer: "We occasionally include free samples with orders. You can also purchase sample sizes of many products to try before buying full sizes."
        }
      ]
    },
    {
      category: "Returns & Refunds",
      questions: [
        {
          question: "What is your return policy?",
          answer: "We offer a 30-day money-back guarantee. If you're not satisfied with your purchase, you can return unopened products within 30 days for a full refund."
        },
        {
          question: "How do I return a product?",
          answer: "Contact our customer service at info@alarabyoils.com with your order number. We'll provide you with return instructions and a prepaid shipping label."
        },
        {
          question: "When will I receive my refund?",
          answer: "Refunds are processed within 5-7 business days after we receive your returned item. The money will be credited back to your original payment method."
        },
        {
          question: "Can I exchange a product?",
          answer: "Yes! If you'd like to exchange a product for a different item or size, please contact our customer service team and we'll be happy to help."
        }
      ]
    },
    {
      category: "Account & Privacy",
      questions: [
        {
          question: "Do I need an account to place an order?",
          answer: "No, you can checkout as a guest. However, creating an account allows you to track orders, save addresses, and receive exclusive offers."
        },
        {
          question: "How do I reset my password?",
          answer: "Click on 'Forgot Password' on the login page. Enter your email address and we'll send you instructions to reset your password."
        },
        {
          question: "Is my personal information safe?",
          answer: "Yes, we take your privacy seriously. We use secure encryption and never share your personal information with third parties without your consent."
        },
        {
          question: "How can I update my account information?",
          answer: "Log in to your account and go to 'Account Settings' where you can update your email, password, shipping address, and payment methods."
        }
      ]
    }
  ];

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(faq =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const index = categoryIndex * 1000 + questionIndex;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Help Center</Badge>
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Find answers to common questions about our products, shipping, and policies
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for answers..."
              className="pl-10 bg-secondary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredFaqs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-primary text-primary-foreground">
                  {category.category}
                </Badge>
                <div className="h-px flex-1 bg-border" />
              </div>

              <div className="space-y-3">
                {category.questions.map((faq, questionIndex) => {
                  const index = categoryIndex * 1000 + questionIndex;
                  const isOpen = openIndex === index;

                  return (
                    <Card key={questionIndex} className="border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <CardContent className="p-0">
                        <button
                          onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                          className="w-full p-6 text-left flex items-center justify-between hover:bg-secondary/50 transition-colors"
                        >
                          <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                          <ChevronDown
                            className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                              isOpen ? "transform rotate-180" : ""
                            }`}
                          />
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            isOpen ? "max-h-96" : "max-h-0"
                          }`}
                        >
                          <div className="px-6 pb-6 text-muted-foreground">
                            {faq.answer}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">
              No questions found matching your search. Try different keywords.
            </p>
            <a href="/contact">
              <Button variant="outline">Contact Support</Button>
            </a>
          </div>
        )}

        {/* Still Have Questions */}
        <div className="mt-12 bg-secondary/50 rounded-lg p-8 text-center">
          <Badge className="bg-badge text-badge-foreground mb-4">Need More Help?</Badge>
          <h2 className="text-2xl font-bold mb-3">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for? Our customer support team is here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button size="lg" className="bg-success hover:bg-success/90">
                Contact Support
              </Button>
            </a>
            <a href="mailto:info@alarabyoils.com">
              <Button size="lg" variant="outline">
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;