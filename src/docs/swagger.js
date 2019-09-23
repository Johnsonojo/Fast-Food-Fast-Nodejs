import dotenv from 'dotenv';

dotenv.config();

const { APP_BASE_URL } = process.env;

export default {
  swagger: '2.0',
  info: {
    description: `Welcome to the documentation of Fast Food Fast API. The base url for working with this api is ${APP_BASE_URL}/api`,
    version: '1.0.0',
    title: 'Fast Food Fast API',
    contact: {
      name: 'Johnson Ojo',
      url: 'https://github.com/Johnsonojo/Fast-Food-Fast-Nodejs'
    },
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT'
    }
  },
  host: APP_BASE_URL,
  basePath: '/api',
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: 'users',
      description: 'The users of Fast Food Fast'
    },
    {
      name: 'menus',
      description: 'The menus created by Fast Food Fast admin'
    },
  ],
  schemes: ['https', 'http'],
  paths: {
    '/auth/signup': {
      post: {
        tags: ['users'],
        summary: 'Creates a new user',
        description: '',
        parameters: [
          {
            name: 'user',
            in: 'body',
            description: 'User object to be created',
            schema: {
              properties: {
                username: {
                  required: true,
                  type: 'string'
                },
                email: {
                  required: true,
                  type: 'string'
                },
                password: {
                  required: true,
                  type: 'string'
                }
              }
            }
          }
        ],
        produces: ['application/json'],
        responses: {
          201: {
            description: 'User signup was successful',
            schema: {
              properties: {
                message: {
                  type: 'string'
                },
                token: {
                  type: 'string'
                }
              },
              example: {
                message: 'User signup was successful',
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo2LCJ1c2VybmFtZSI6ImVuaW9sYSIsInJvbGUiOiJ1c2VyIn0sImlhdCI6MTU2ODkxNDgwNSwiZXhwIjoxNTY5MDAxMjA1fQ.sT4ZrLZG2fLju8bJWSnPBHZMUafZWhpyRQsHu06_g28'
              }
            }
          },
          400: {
            description: 'Validation exception',
            schema: {
              example: {
                errors: {
                  body: [
                    'Password should be alphanumeric e.g. abc123',
                    'Password must be at least 8 characters long'
                  ]
                }
              }
            }
          }
        }
      },
    },
    '/auth/login': {
      post: {
        tags: ['users'],
        summary: 'Login user to the app',
        description: '',
        parameters: [
          {
            name: 'user',
            in: 'body',
            description: 'Registered user that want to login',
            schema: {
              properties: {
                email: {
                  required: true,
                  type: 'string'
                },
                password: {
                  required: true,
                  type: 'string'
                }
              }
            }
          }
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'User login was successful',
            schema: {
              properties: {
                message: {
                  type: 'string'
                },
                token: {
                  type: 'string'
                }
              },
              example: {
                message: 'Welcome back John',
                token:
                  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo2LCJ1c2VybmFtZSI6ImVuaW9sYSIsInJvbGUiOiJ1c2VyIn0sImlhdCI6MTU2ODkxNDgwNSwiZXhwIjoxNTY5MDAxMjA1fQ.sT4ZrLZG2fLju8bJWSnPBHZMUafZWhpyRQsHu06_g28'
              }
            }
          },
          401: {
            description: 'Error: Unauthorized',
            schema: {
              example: {
                status: 'Fail',
                message: 'Incorrect login credentials'
              }
            }
          },
          404: {
            description: 'Error: Not Found',
            schema: {
              example: {
                status: 'Fail',
                message: 'User not found'
              }
            }
          }
        }
      }
    },
    '/verification': {
      get: {
        tags: ['users'],
        summary: 'Verify a new user',
        description: '',
        parameters: [],
        produces: ['application/json'],
        responses: {
          204: {
            description: 'Email already verified',
            schema: {
              properties: {
                message: {
                  type: 'string'
                }
              },
              example: {
                message: 'Email already verified'
              }
            }
          },
          201: {
            description: 'User verified',
            schema: {
              properties: {
                status: {
                  type: 'string'
                },
                message: {
                  type: 'string'
                }
              },
              example: {
                status: 'Success',
                message: 'Your email: johndoe@example.com has been verified'
              }
            }
          },
          500: {
            description: 'Encountered an error verifying user'
          },
          404: {
            description: 'User not found'
          }
        }
      }
    },
    '/menu': {
      post: {
        tags: ['menus'],
        summary: 'Creates a new menu',
        description: '',
        parameters: [
          {
            name: 'menu',
            in: 'body',
            description: 'Menu object to be created',
            schema: {
              properties: {
                foodName: {
                  required: true,
                  type: 'string'
                },
                foodPrice: {
                  required: true,
                  type: 'string'
                },
                foodImage: {
                  required: true,
                  type: 'string'
                }
              }
            }
          }
        ],
        produces: ['application/json'],
        responses: {
          201: {
            description: 'Menu was added successfully',
            schema: {
              properties: {
                status: {
                  type: 'string'
                },
                message: {
                  type: 'string'
                },
                newMenu: {},
              },
              example: {
                status: 'Success',
                message: 'Menu was added successfully',
                newMenu: {
                  id: 12,
                  foodName: 'Bread and Eggs',
                  foodPrice: 400,
                  foodImage: 'https://bit.ly/2mi9QlA',
                  updatedAt: '2019-09-19T20:47:31.254Z',
                  createdAt: '2019-09-19T20:47:31.254Z'
                }
              }
            }
          },
          400: {
            description: 'Validation exception',
            schema: {
              example: {
                errors: {
                  body: [
                    'food name already exists'
                  ]
                }
              }
            }
          },
          401: {
            description: 'Error: Unauthorized',
            schema: {
              example: {
                status: 'failure',
                message: 'User authentication failed',
                error: {
                  name: 'JsonWebTokenError',
                  message: 'jwt must be provided'
                }
              }
            }
          }
        }
      },
      get: {
        tags: ['menus'],
        summary: 'Get all menu',
        description: '',
        parameters: [
          {
            name: 'Content-Type',
            in: 'header',
            required: true,
            type: 'string',
            description: ''
          }
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: '',
            headers: {}
          }
        }
      },
    },
    '/menu/:menuId': {
      get: {
        tags: ['menus'],
        summary: 'Get one menu',
        description: '',
        parameters: [
          {
            name: 'Content-Type',
            in: 'header',
            required: true,
            type: 'string',
            description: ''
          }
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: '',
            headers: {}
          }
        }
      },
    }
  },
  definitions: {
    users: {
      required: ['username', 'email', 'password'],
      requiredForUpdate: ['email', 'username', 'bio', 'image'],
      properties: {
        id: {
          readOnly: true,
          type: 'string',
          uniqueItems: true
        },
        username: {
          type: 'string',
          uniqueItems: true
        },
        email: {
          type: 'string',
          uniqueItems: true
        },
        password: {
          type: 'string'
        },
        address: {
          type: 'string'
        },
        phoneNumber: {
          type: 'string'
        },
        role: {
          type: 'string'
        },
        image: {
          type: 'string'
        },
        emailToken: {
          type: 'string'
        },
        isVerified: {
          type: 'boolean'
        },
        createdAt: {
          readOnly: true,
          type: 'string'
        },
        updatedAt: {
          readOnly: true,
          type: 'string'
        }
      }
    },
    menus: {
      required: ['foodName', 'foodPrice', 'foodImage'],
      requiredForUpdate: ['foodPrice', 'foodName', 'foodImage'],
      properties: {
        id: {
          readOnly: true,
          type: 'string',
          uniqueItems: true
        },
        foodName: {
          type: 'string',
          uniqueItems: true
        },
        foodPrice: {
          type: 'string',
        },
        foodImage: {
          type: 'string',
          uniqueItems: true
        },
        createdAt: {
          readOnly: true,
          type: 'string'
        },
        updatedAt: {
          readOnly: true,
          type: 'string'
        }
      }
    },
  },
};
