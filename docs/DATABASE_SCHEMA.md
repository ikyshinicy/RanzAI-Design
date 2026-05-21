# Database Schema Draft

## users
- id
- email
- name
- plan
- credits
- created_at

## projects
- id
- user_id
- title
- brief
- result
- created_at

## usage_logs
- id
- user_id
- tool_name
- credit_used
- created_at

## payments
- id
- user_id
- amount
- status
- provider
- created_at
