import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Todo from './Todo'

describe('Todo Component', () => {
  const mockTodo = {
    _id: '1',
    text: 'Test todo',
    done: false
  }

  const mockDeleteTodo = vi.fn()
  const mockCompleteTodo = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders todo text correctly', () => {
    render(
      <Todo 
        todo={mockTodo} 
        deleteTodo={mockDeleteTodo} 
        completeTodo={mockCompleteTodo} 
      />
    )
    
    expect(screen.getByText('Test todo')).toBeInTheDocument()
  })

  it('shows "not done" status for incomplete todo', () => {
    render(
      <Todo 
        todo={mockTodo} 
        deleteTodo={mockDeleteTodo} 
        completeTodo={mockCompleteTodo} 
      />
    )
    
    expect(screen.getByText('This todo is not done')).toBeInTheDocument()
    expect(screen.getByText('Set as done')).toBeInTheDocument()
  })

  it('shows "done" status for completed todo', () => {
    const completedTodo = { ...mockTodo, done: true }
    
    render(
      <Todo 
        todo={completedTodo} 
        deleteTodo={mockDeleteTodo} 
        completeTodo={mockCompleteTodo} 
      />
    )
    
    expect(screen.getByText('This todo is done')).toBeInTheDocument()
    expect(screen.queryByText('Set as done')).not.toBeInTheDocument()
  })

  it('calls deleteTodo when delete button is clicked', () => {
    render(
      <Todo 
        todo={mockTodo} 
        deleteTodo={mockDeleteTodo} 
        completeTodo={mockCompleteTodo} 
      />
    )
    
    const deleteButton = screen.getByText('Delete')
    fireEvent.click(deleteButton)
    
    expect(mockDeleteTodo).toHaveBeenCalledWith(mockTodo)
  })

  it('calls completeTodo when "Set as done" button is clicked', () => {
    render(
      <Todo 
        todo={mockTodo} 
        deleteTodo={mockDeleteTodo} 
        completeTodo={mockCompleteTodo} 
      />
    )
    
    const completeButton = screen.getByText('Set as done')
    fireEvent.click(completeButton)
    
    expect(mockCompleteTodo).toHaveBeenCalledWith(mockTodo)
  })

  it('does not show "Set as done" button for completed todo', () => {
    const completedTodo = { ...mockTodo, done: true }
    
    render(
      <Todo 
        todo={completedTodo} 
        deleteTodo={mockDeleteTodo} 
        completeTodo={mockCompleteTodo} 
      />
    )
    
    expect(screen.queryByText('Set as done')).not.toBeInTheDocument()
  })

  it('always shows delete button regardless of completion status', () => {
    // Test for incomplete todo
    const { rerender } = render(
      <Todo 
        todo={mockTodo} 
        deleteTodo={mockDeleteTodo} 
        completeTodo={mockCompleteTodo} 
      />
    )
    
    expect(screen.getByText('Delete')).toBeInTheDocument()
    
    // Test for completed todo
    const completedTodo = { ...mockTodo, done: true }
    rerender(
      <Todo 
        todo={completedTodo} 
        deleteTodo={mockDeleteTodo} 
        completeTodo={mockCompleteTodo} 
      />
    )
    
    expect(screen.getByText('Delete')).toBeInTheDocument()
  })
}) 