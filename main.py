import pygame
import sys
import random
import math

pygame.init()

# ---------------- SCREEN SETTINGS ----------------
WIDTH, HEIGHT = 100, 700
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Tree Photo Collection")

clock = pygame.time.Clock()

BLACK = (0, 0, 0)
WHITE = (255, 255, 255)


# ---------------- HEART CLASS ----------------
class Heart:
    def __init__(self):
        self.x = random.randint(20, WIDTH - 20)
        self.y = random.randint(HEIGHT, HEIGHT + 300)

        self.size = random.randint(5, 14)
        self.speed = random.uniform(0.5, 2)
        self.offset = random.uniform(0, math.pi * 2)

    def update(self):
        # Move upward
        self.y -= self.speed

        # Small left-right movement
        self.x += math.sin(self.y * 0.02 + self.offset) * 0.5

        # Reset when it goes outside screen
        if self.y < -30:
            self.y = random.randint(HEIGHT, HEIGHT + 200)
            self.x = random.randint(20, WIDTH - 20)

    def draw(self, surface):
        points = []

        # Create mathematical heart shape
        for i in range(0, 360, 10):
            t = math.radians(i)

            x = 16 * math.sin(t) ** 3
            y = (
                13 * math.cos(t)
                - 5 * math.cos(2 * t)
                - 2 * math.cos(3 * t)
                - math.cos(4 * t)
            )

            x = self.x + x * self.size / 16
            y = self.y - y * self.size / 16

            points.append((x, y))

        # Draw white outline heart
        if len(points) > 2:
            pygame.draw.lines(surface, WHITE, True, points, 1)


# ---------------- SPARKLE CLASS ----------------
class Sparkle:
    def __init__(self):
        self.x = random.randint(0, WIDTH)
        self.y = random.randint(HEIGHT, HEIGHT + 300)

        self.size = random.randint(1, 3)
        self.speed = random.uniform(0.8, 2.5)

        self.brightness = random.randint(120, 255)

    def update(self):
        self.y -= self.speed

        if self.y < 0:
            self.y = random.randint(HEIGHT, HEIGHT + 200)
            self.x = random.randint(0, WIDTH)

    def draw(self, surface):
        color = (self.brightness, self.brightness, self.brightness)

        pygame.draw.line(
            surface,
            color,
            (self.x - self.size * 2, self.y),
            (self.x + self.size * 2, self.y),
            1
        )

        pygame.draw.line(
            surface,
            color,
            (self.x, self.y - self.size * 2),
            (self.x, self.y + self.size * 2),
            1
        )


# ---------------- BUBBLE CLASS ----------------
class Bubble:
    def __init__(self):
        self.x = random.randint(20, WIDTH - 20)
        self.y = random.randint(HEIGHT, HEIGHT + 300)

        self.radius = random.randint(3, 10)
        self.speed = random.uniform(0.3, 1.2)

        self.offset = random.uniform(0, math.pi * 2)

    def update(self):
        self.y -= self.speed

        # Gentle floating movement
        self.x += math.sin(self.y * 0.03 + self.offset) * 0.3

        if self.y < -20:
            self.y = random.randint(HEIGHT, HEIGHT + 200)
            self.x = random.randint(20, WIDTH - 20)

    def draw(self, surface):
        pygame.draw.circle(
            surface,
            (180, 180, 180),
            (int(self.x), int(self.y)),
            self.radius,
            1
        )

        # Small shine
        pygame.draw.circle(
            surface,
            WHITE,
            (
                int(self.x - self.radius / 3),
                int(self.y - self.radius / 3)
            ),
            1
        )


# ---------------- CREATE OBJECTS ----------------

hearts = [Heart() for _ in range(35)]

sparkles = [Sparkle() for _ in range(80)]

bubbles = [Bubble() for _ in range(25)]


# ---------------- MAIN LOOP ----------------
running = True

while running:

    screen.fill(BLACK)

    # Close window
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Update and draw hearts
    for heart in hearts:
        heart.update()
        heart.draw(screen)

    # Update and draw sparkles
    for sparkle in sparkles:
        sparkle.update()
        sparkle.draw(screen)

    # Update and draw bubbles
    for bubble in bubbles:
        bubble.update()
        bubble.draw(screen)

    pygame.display.flip()

    clock.tick(60)


pygame.quit()
sys.exit()