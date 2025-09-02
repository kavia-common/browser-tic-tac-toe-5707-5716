import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Theme Toggle', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('shows current theme and toggles when button is clicked', () => {
    render(<App />);

    // Verify initial theme display
    expect(screen.getByText(/Current theme:/i)).toBeInTheDocument();
    expect(screen.getByText(/Current theme:\s*light/i)).toBeInTheDocument();

    // Find toggle button by its accessible name
    const toggleBtn = screen.getByRole('button', {
      name: /switch to dark mode/i,
    });
    expect(toggleBtn).toBeInTheDocument();

    // Click to switch to dark
    fireEvent.click(toggleBtn);

    // After click, theme should be dark and aria-label should update to switch back to light
    expect(screen.getByText(/Current theme:\s*dark/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /switch to light mode/i })
    ).toBeInTheDocument();
  });
});

describe.skip('Tic Tac Toe - Placeholder suite', () => {
  /**
   * The tic tac toe UI is not implemented yet in the current App.
   * These tests are placeholders for upcoming features requested:
   * - Start new game
   * - Two-player local mode
   * - Display game board
   * - Show current player's turn
   * - Display win, lose, or draw messages
   * - Restart game option
   *
   * Once the UI exists, remove `.skip` from describe and implement the queries to match actual UI.
   */
  test('Start new game button is rendered and starts a new game', () => {});

  test('Two-player local mode can be selected', () => {});

  test('Displays a 3x3 game board', () => {});

  test("Shows current player's turn", () => {});

  test('Displays win/lose/draw messages appropriately', () => {});

  test('Can restart the game', () => {});
});
